import { createClient } from "@supabase/supabase-js";

// SERVICE ROLE client — bypasses Row Level Security entirely.
// Server-only. Never import this into a "use client" component, and never
// expose SUPABASE_SERVICE_ROLE_KEY with a NEXT_PUBLIC_ prefix.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } },
  );
}
