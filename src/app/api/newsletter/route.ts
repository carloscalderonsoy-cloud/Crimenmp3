import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Crimen.mp3 Newsletter" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Nueva suscripción: ${email}`,
      html: `
        <div style="font-family:monospace;background:#1A1617;color:#FAEBD6;padding:32px;border-radius:4px;">
          <h2 style="color:#FC47AF;margin:0 0 16px;">Nueva suscripción al newsletter</h2>
          <p style="margin:0;font-size:1.1rem;"><strong>${email}</strong></p>
          <hr style="border-color:#FC47AF33;margin:24px 0;"/>
          <p style="color:#B0CCC9;font-size:0.85rem;margin:0;">Crimen.mp3 · ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Newsletter error:', err);
    return NextResponse.json({ error: 'Error al enviar. Intenta de nuevo.' }, { status: 500 });
  }
}
