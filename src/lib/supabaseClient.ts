// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// Helper function to create a Supabase client (client-side, uses anon key)
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(supabaseUrl, supabaseKey)
}

// Helper function to create a Supabase client for server actions (server-side, uses service role key)
// This bypasses RLS policies for server-side operations
export function getSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable.')
  }

  if (!supabaseKey) {
    throw new Error(
      'Missing SUPABASE_SERVICE_ROLE_KEY environment variable. ' +
      'This is required for server-side operations that bypass RLS policies. ' +
      'Never use NEXT_PUBLIC_SUPABASE_ANON_KEY for server actions.'
    )
  }
  
  return createClient(supabaseUrl, supabaseKey)
}