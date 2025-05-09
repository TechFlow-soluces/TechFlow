import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    const { name, email, message } = await req.json()

    console.log("GMAIL_USER:", process.env.GMAIL_USER)
    console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? '✅ défini' : '❌ manquant')

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    })

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Nouveau message de ${name}`, // <-- backticks ici
        text:
            `Nom : ${name}\n` +
            `Email : ${email}\n\n` +
            `Message :\n${message}`,
    }

    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, error: "Erreur lors de l'envoi de l'email." }, { status: 500 })
    }
}
