'use server'

import { getSupabaseClient } from '@/lib/supabaseClient'
import { revalidatePath } from 'next/cache'

// Action to add a new waitlist entry
export async function addWaitlistDoctor(formData: {
   email: string;
   country: string;
}) {
  try {
    const supabase = getSupabaseClient()
    
    // Insert data into the waitlist table
    const { error } = await supabase
      .from('doctor_waitlist')
      .insert([
        {
          email: formData.email,
          country: formData.country,
        }
      ])
    
    if (error) {
      throw new Error(error.message)
    }
    
    // Revalidate the patients page to refresh the data
    revalidatePath('/patients')
    
    return { success: true }
  } catch (error) {
    throw new Error('An unexpected error occurred')
  }
}
