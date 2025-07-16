'use server'

import { getSupabaseClient } from '@/lib/supabaseClient'
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend'
import { waitlistEmailTemplate } from '@/emails/templates/waitlist-confirmation';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function addWaitlist(formData: { email: string }) {
  try {
    const supabase = getSupabaseClient()

    console.log('Server Action: Inserting data:', formData)

    // 1. Insertar en Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email: formData.email }])

    if (error) {
      console.error('Server Action: Error inserting into waitlist:', error)
      throw new Error(error.message)
    }

    console.log('Server Action: Insert successful')


    const htmlContent = waitlistEmailTemplate({
      logoUrl: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_LOGO_URL!,
      websiteUrl: 'https://x.com/MedDeFi',
    });

    await resend.emails.send({
      from: 'MedDefi <onboarding@resend.dev>', // domain should be verified in Resend
      to: formData.email,
      subject: 'You’re on the MedDefi waitlist! 🎉',
      html: htmlContent,
    })

    console.log('Server Action: Email enviado con éxito')

    // 3. Revalidar ruta
    revalidatePath('/patients')

    return { success: true }
  } catch (error) {
    console.error('Server Action: Unexpected error:', error)
    throw new Error('Ocurrió un error inesperado')
  }
}