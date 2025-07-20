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
    
    console.log('Server Action: Inserting data:', formData)
    
    // Insert data into the waitlist table
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
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
      console.error('Server Action: Error inserting into patients_waitlist table:', error)
      throw new Error(error.message)
    }
    
    console.log('Server Action: Insert successful');
    
    // Revalidate the patients page to refresh the data
    revalidatePath('/patients')
    
    return { success: true }
  } catch (error) {
    console.error('Server Action: Unexpected error:', error)
    throw new Error('An unexpected error occurred')
  }
}
