import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const WINE_ENTRIES_TABLE = "wine_entries";

export type WineEntry = Database["public"]["Tables"]["wine_entries"]["Row"];
export type NewWineEntry = Omit<
  Database["public"]["Tables"]["wine_entries"]["Insert"],
  "id" | "created_at" | "updated_at"
>;
export type WineEntryUpdate = Omit<
  Database["public"]["Tables"]["wine_entries"]["Update"],
  "id" | "created_at" | "updated_at"
>;
export type CellarSupabaseClient = SupabaseClient<Database>;

export function isValidRating(rating: number): boolean {
  return Number.isInteger(rating) && rating >= 1 && rating <= 100;
}

export function validateRating(rating: number): void {
  if (!isValidRating(rating)) {
    throw new RangeError("Wine rating must be an integer from 1 to 100.");
  }
}

export async function listWineEntries(
  supabase: CellarSupabaseClient = createServerSupabaseClient()
): Promise<WineEntry[]> {
  const { data, error } = await supabase
    .from(WINE_ENTRIES_TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to list wine entries: ${error.message}`);
  }

  return data ?? [];
}

export async function getWineEntry(
  id: string,
  supabase: CellarSupabaseClient = createServerSupabaseClient()
): Promise<WineEntry | null> {
  const { data, error } = await supabase
    .from(WINE_ENTRIES_TABLE)
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(`Unable to load wine entry: ${error.message}`);
  }

  return data;
}

export async function createWineEntry(
  entry: NewWineEntry,
  supabase: CellarSupabaseClient = createServerSupabaseClient()
): Promise<WineEntry> {
  validateRating(entry.rating);

  const { data, error } = await supabase
    .from(WINE_ENTRIES_TABLE)
    .insert(entry)
    .select("*")
    .single();

  if (error) {
    throw new Error(`Unable to create wine entry: ${error.message}`);
  }

  return data;
}

export async function updateWineEntry(
  id: string,
  entry: WineEntryUpdate,
  supabase: CellarSupabaseClient = createServerSupabaseClient()
): Promise<WineEntry> {
  if (entry.rating !== undefined) {
    validateRating(entry.rating);
  }

  const { data, error } = await supabase
    .from(WINE_ENTRIES_TABLE)
    .update(entry)
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw new Error(`Unable to update wine entry: ${error.message}`);
  }

  return data;
}

export async function deleteWineEntry(
  id: string,
  supabase: CellarSupabaseClient = createServerSupabaseClient()
): Promise<void> {
  const { error } = await supabase.from(WINE_ENTRIES_TABLE).delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete wine entry: ${error.message}`);
  }
}
