/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Checking environment variables...')
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email credentials:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD
      })
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    console.log('Creating transporter with user:', process.env.EMAIL_USER)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    })

    console.log('Verifying SMTP connection...')
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError: any) {
      console.log('SMTP verification failed, but continuing (this is normal in some environments):', verifyError?.message)
    }

    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL || 'nightbytesu@gmail.com',
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4171F9;">Nouveau message de contact</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #4171F9;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact du site web NightByte.
          </p>
        </div>
      `,
    }

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Merci pour votre message - NightByte',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px;">
            <h1 style="color: #4171F9;">NightByte</h1>
            <h2>Merci pour votre message!</h2>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <p>Bonjour ${name},</p>
            <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
            <p>Notre équipe examinera votre demande et vous répondra dans les plus brefs délais, généralement sous 24 heures.</p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <h3 style="margin-top: 0; color: #4171F9;">Récapitulatif de votre message:</h3>
              <p><strong>Nom:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p style="font-style: italic;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p>Si vous avez des questions urgentes, n'hésitez pas à nous appeler au +213 755422894.</p>
          </div>
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>L'équipe NightByte</p>
            <p>Email: nightbytesu@gmail.com | Téléphone: +213 755422894</p>
          </div>
        </div>
      `,
    }

    console.log('Sending company email...')
    await transporter.sendMail(companyMailOptions)
    console.log('Company email sent successfully')

    console.log('Sending user confirmation email...')
    await transporter.sendMail(userMailOptions)
    console.log('User confirmation email sent successfully')

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Detailed error sending email:', {
      message: error?.message,
      code: error?.code,
      command: error?.command,
      response: error?.response,
      stack: error?.stack
    })
    return NextResponse.json(
      { error: 'Failed to send email', details: error?.message },
      { status: 500 }
    )
  }
}