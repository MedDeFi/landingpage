// app/api/waitlist/route.ts
import { NextResponse } from 'next/server'
import { addWaitlist } from '@/components/forms/Waitlist/api/insertWaitlist'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validación mínima del email
    if (!body?.email || typeof body.email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Invalid email address.' },
        { status: 400 }
      )
    }

    const result = await addWaitlist({ email: body.email })

    return NextResponse.json(result)
  } catch (error) {
    console.error('API /waitlist error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal Server Error.' },
      { status: 500 }
    )
  }
}
