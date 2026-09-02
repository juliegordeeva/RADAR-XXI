import { NextResponse } from "next/server";
import { subscribeSchema } from "@/lib/schemas";

export const dynamic = "force-dynamic";

async function sendMail(subject: string, text: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.RESEND_FROM;
  if (!key || !to || !from) {
    console.info("[subscribe]", subject, text);
    return;
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], subject, text }),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(body);
  }
}

export async function POST(request: Request) {
  try {
    const json: unknown = await request.json();
    const parsed = subscribeSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (parsed.data.website && parsed.data.website.length > 0) {
      return NextResponse.json({ ok: true });
    }
    await sendMail(
      "Лид-магнит RADAR XXI",
      `Почта: ${parsed.data.email}\nНужно отправить PDF: карточка безопасности + день адвента.`,
    );
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
