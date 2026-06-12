"use client";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";
import { getSupabaseEnv } from "./env";

export function createBrowserSupabaseClient() {
  const { url, anonKey } = getSupabaseEnv();

  return createClient<Database>(url, anonKey);
}
