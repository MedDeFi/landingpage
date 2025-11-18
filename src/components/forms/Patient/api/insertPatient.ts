'use server'

import { getSupabaseClient } from '@/lib/supabaseClient'
import { revalidatePath } from 'next/cache'

// Action to add a new waitlist entry
export async function addWaitlistPatient(formData: {
   name: string;
   email: string;
   procedure: string;
   customProcedure: string;
}) {
  try {
    const supabase = getSupabaseClient()
    
    // Insert data into the waitlist table
    const { error } = await supabase
      .from('patients_waitlist')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          procedure: formData.procedure,
          customProcedure: formData.customProcedure
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
