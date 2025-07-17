# 🏥 MedDeFi Landing Page

This is the official landing page for **MedDeFi**, a decentralized health platform.

## 🎯 Purpose

The goal of this landing page is to:

- Introduce **MedDeFi** to new users
- Collect email addresses for a **waitlist**
- Onboard both **doctors** and **patients** who are interested in joining the platform

## 📌 Features

- Responsive design
- Separate signup sections for doctors and patients
- Clean and modern UI using React and Tailwind CSS
- Ready for future integration with backend or smart contract infrastructure


## Supabase local development

Create **.env.local** file

- Ref: https://app.supabase.com/project/_/settings/api
```text
NEXT_PUBLIC_SUPABASE_URL=<SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<SUPAVASE_ANON_KEY>
```

## Resend - Send email functionality

Add in **.env.local** file the following entries
```text
RESEND_API_KEY=<RESEND_API_KEY>
NEXT_PUBLIC_EMAIL_TEMPLATE_LOGO_URL=<LOGO_URL_FOR_EMAIL_TEMPLATE>
```