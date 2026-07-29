import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const { name, email, message, company, role, segment } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const details: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Role", role || "—"],
    ["Operation type", segment || "—"],
  ];

  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `New enquiry from the site — ${company || name}`,
    text: `${details.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#0e7490">New enquiry from the site</h2>
        ${details
          .map(
            ([k, v]) =>
              `<p style="margin:4px 0"><strong>${k}:</strong> ${escapeHtml(String(v))}</p>`
          )
          .join("")}
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p style="white-space:pre-wrap">${escapeHtml(String(message))}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
