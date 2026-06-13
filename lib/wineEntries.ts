import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const WINE_ENTRIES_TABLE = "wine_entries";
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

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

export function validateWineEntryId(id: string): void {
  if (!UUID_PATTERN.test(id)) {
    throw new Error("Wine entry id must be a valid UUID.");
  }
}

function validateRequiredText(value: string, fieldName: string): void {
  if (value.trim().length === 0) {
    throw new Error(`${fieldName} is required.`);
  }
}

function validateOptionalText(value: string | null | undefined, fieldName: string): void {
  if (value !== null && value !== undefined && value.trim().length === 0) {
    throw new Error(`${fieldName} cannot be blank.`);
  }
}

function validatePrice(price: number): void {
  if (!Number.isFinite(price) || price < 0) {
    throw new RangeError("Wine price must be zero or greater.");
  }
}

function validateOptionalVintage(vintage: number | null | undefined): void {
  if (vintage !== null && vintage !== undefined && (!Number.isInteger(vintage) || vintage < 1)) {
    throw new RangeError("Wine vintage must be a positive whole year.");
  }
}

function validateWineEntryFields(entry: NewWineEntry): void {
  validateRequiredText(entry.winery, "Winery");
  validateRequiredText(entry.wine_name, "Wine name");
  validateRequiredText(entry.region, "Region");
  validatePrice(entry.price);
  validateRating(entry.rating);
  validateOptionalVintage(entry.vintage);

  validateOptionalText(entry.grape, "Grape");
  validateOptionalText(entry.country, "Country");
  validateOptionalText(entry.location, "Location");
  validateOptionalText(entry.people, "People");
  validateOptionalText(entry.food_pairing, "Food pairing");
  validateOptionalText(entry.occasion, "Occasion");
  validateOptionalText(entry.notes, "Notes");
  validateOptionalText(entry.photo_path, "Photo path");
}

function validateWineEntryUpdate(entry: WineEntryUpdate): void {
  if (Object.keys(entry).length === 0) {
    throw new Error("Wine entry update must include at least one field.");
  }

  if (entry.winery !== undefined) {
    validateRequiredText(entry.winery, "Winery");
  }

  if (entry.wine_name !== undefined) {
    validateRequiredText(entry.wine_name, "Wine name");
  }

  if (entry.region !== undefined) {
    validateRequiredText(entry.region, "Region");
  }

  if (entry.price !== undefined) {
    validatePrice(entry.price);
  }

  if (entry.rating !== undefined) {
    validateRating(entry.rating);
  }

  validateOptionalVintage(entry.vintage);
  validateOptionalText(entry.grape, "Grape");
  validateOptionalText(entry.country, "Country");
  validateOptionalText(entry.location, "Location");
  validateOptionalText(entry.people, "People");
  validateOptionalText(entry.food_pairing, "Food pairing");
  validateOptionalText(entry.occasion, "Occasion");
  validateOptionalText(entry.notes, "Notes");
  validateOptionalText(entry.photo_path, "Photo path");
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
  validateWineEntryId(id);

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
  validateWineEntryFields(entry);

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
  validateWineEntryId(id);
  validateWineEntryUpdate(entry);

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
  validateWineEntryId(id);

  const { error } = await supabase.from(WINE_ENTRIES_TABLE).delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete wine entry: ${error.message}`);
  }
}
