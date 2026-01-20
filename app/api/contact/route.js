import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 Mail to Company
    await transporter.sendMail({
      from: `"Aayush Enterprises" <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_USER}>`,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    // 📩 Auto-reply to User
    await transporter.sendMail({
      from: `"Musab Hassan" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry – Musab Hassan",
      html: `
        <p>Dear <b>${name},</b></p>
        <p>Thank you for contacting <b>Musab Hassan</b>.</p>
        <p>We have received your message and will get back to you within <b>2–4 hours</b>.</p>
        <br/>
        <p>Best Regards,<br/>
        <b>Musab Hassan</b></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 },
    );
  }
}
