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

    const { error: insertError } = await supabase
      .from('waitlist')
      .insert([{ email: formData.email.trim() }])
      .select()

    if (insertError) {
      const errorMessage = insertError.message || 'Unknown error'
      const errorCode = insertError.code || 'unknown'
      return { 
        success: false, 
        message: `Error saving email to waitlist: ${errorMessage} (Code: ${errorCode})` 
      }
    }

    if (resend) {
      const htmlContent = waitlistEmailTemplate({
        logoUrl: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_LOGO_URL || '',
        websiteUrl: 'https://x.com/MedDeFi',
      })

      try {
        await resend.emails.send({
          from: 'MedDefi <onboarding@resend.dev>',
          to: formData.email,
          subject: "You're on the MedDefi waitlist! 🎉",
          html: htmlContent,
        })
      } catch (emailError) {
        // Email send failed but user was added to waitlist successfully
        // Continue without blocking the user experience
      }
    }

    revalidatePath('/patients')

    return { success: true, message: 'Successfully added to the waitlist.' }
  } catch (error) {
    return { success: false, message: 'Unexpected error occurred.' }
  }
}