import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const { name, email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // TODO: conectar a tu plataforma de email marketing.
    //
    // Mailchimp:
    //   await fetch(`https://us1.api.mailchimp.com/3.0/lists/LIST_ID/members`, {
    //     method: 'POST',
    //     headers: { Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`, 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email_address: email, status: 'subscribed', merge_fields: { FNAME: name } })
    //   })
    //
    // Brevo (Sendinblue):
    //   await fetch('https://api.brevo.com/v3/contacts', {
    //     method: 'POST',
    //     headers: { 'api-key': process.env.BREVO_API_KEY!, 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, attributes: { FIRSTNAME: name }, listIds: [LIST_ID] })
    //   })
    //
    // ConvertKit:
    //   await fetch(`https://api.convertkit.com/v3/forms/FORM_ID/subscribe`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email, first_name: name })
    //   })

    console.log(`[Newsletter] Nuevo suscriptor: ${name} <${email}>`)

    return NextResponse.json({ ok: true })
}
