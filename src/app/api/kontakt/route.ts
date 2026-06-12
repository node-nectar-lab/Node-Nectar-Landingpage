import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await req.json();

  const { name, firma, branche, telefon, email, website, probleme, missedCalls, paket, anmerkung } = data;

  try {
    await resend.emails.send({
      from: 'Anfragen <anfragen@nodenectar.de>',
      to: 'info@nodenectar.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name} – ${firma}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600;width:200px">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">Firma</td><td style="padding:8px">${firma}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">Branche</td><td style="padding:8px">${branche || '–'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">Telefon</td><td style="padding:8px">${telefon}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">E-Mail</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">Website</td><td style="padding:8px">${website || '–'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">Hauptprobleme</td><td style="padding:8px">${probleme?.length ? probleme.join(', ') : '–'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">Verpasste Anrufe/Woche</td><td style="padding:8px">${missedCalls || '–'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">Gewünschtes Paket</td><td style="padding:8px">${paket || '–'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:600">Anmerkung</td><td style="padding:8px">${anmerkung || '–'}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ ok: false, error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }
}
