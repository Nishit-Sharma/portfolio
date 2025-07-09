import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactFormEmail from "@/app/contact/email";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailHtml = await render(
    <ContactFormEmail
      name={name}
      email={email}
      subject={subject}
      message={message}
    />
  );

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission: ${subject}`,
    html: emailHtml,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
