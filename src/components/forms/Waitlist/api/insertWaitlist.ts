'use server'

import { getSupabaseServerClient } from '@/lib/supabaseClient'
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend'
import { waitlistEmailTemplate } from '@/emails/templates/waitlist-confirmation'

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function addWaitlist(formData: { email: string }) {
  try {
    const supabase = getSupabaseServerClient()

    console.log('Server Action: Inserting data:', formData)

    const { error: insertError, data } = await supabase
      .from('waitlist')
      .insert([{ email: formData.email.trim() }])
      .select()

    if (insertError) {
      console.error('Server Action: Supabase insert error:', insertError)
      // Include detailed error message for debugging
      const errorMessage = insertError.message || 'Unknown error'
      const errorCode = insertError.code || 'unknown'
      return { 
        success: false, 
        message: `Error saving email to waitlist: ${errorMessage} (Code: ${errorCode})` 
      }
    }

    console.log('Server Action: Insert successful')

    if (resend) {
      const htmlContent = waitlistEmailTemplate({
        logoUrl: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_LOGO_URL || '',
        websiteUrl: 'https://x.com/MedDeFi',
      })

      try {
        await resend.emails.send({
          from: 'MedDefi <onboarding@resend.dev>',
          to: formData.email,
          subject: 'You’re on the MedDefi waitlist! 🎉',
          html: htmlContent,
        })

        console.log('Server Action: Email sent successfully')
      } catch (emailError) {
        console.error('Server Action: Resend email error:', emailError)
      }
    } else {
      console.warn('Server Action: RESEND_API_KEY not set, skipping email')
    }

    revalidatePath('/patients')

    return { success: true, message: 'Successfully added to the waitlist.' }
  } catch (error) {
    console.error('Server Action: Unexpected error:', error)
    return { success: false, message: 'Unexpected error occurred.' }
  }
}