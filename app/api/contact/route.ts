import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  projectType?: string
  budget?: string
  details?: string
  // Honeypot — should stay empty for real users.
  website?: string
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const details = (body.details || '').trim()

  // Basic spam trap: bots fill hidden fields.
  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !details) {
    return NextResponse.json(
      { error: 'Please provide your name, email, and project details.' },
      { status: 400 },
    )
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  // Delivery goes to the inbox registered with the Web3Forms access key (admin@codvoro.com).
  // The destination is configured server-side and never exposed to the browser.
  if (!accessKey) {
    // Don't fail silently in local/dev: log so submissions aren't lost while unconfigured.
    console.error(
      '[contact] WEB3FORMS_ACCESS_KEY is not set — cannot deliver email. Submission:',
      { name, email, company: body.company, projectType: body.projectType, budget: body.budget },
    )
    return NextResponse.json(
      { error: 'The contact form is not fully configured yet. Please try again later.' },
      { status: 503 },
    )
  }

  const subject = `New project inquiry from ${name}${body.company ? ` (${body.company})` : ''}`

  const web3formsPayload = {
    access_key: accessKey,
    subject,
    from_name: 'Codvoro Website',
    replyto: email,
    // Fields below are rendered into the notification email.
    name,
    email,
    company: body.company || '—',
    project_type: body.projectType || '—',
    budget: body.budget || '—',
    message: details,
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(web3formsPayload),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok || !data?.success) {
      console.error('[contact] Web3Forms delivery failed:', data)
      return NextResponse.json(
        { error: 'We could not send your message right now. Please try again shortly.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error delivering message:', err)
    return NextResponse.json(
      { error: 'We could not send your message right now. Please try again shortly.' },
      { status: 502 },
    )
  }
}
