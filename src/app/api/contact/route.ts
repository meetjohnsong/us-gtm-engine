import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    const result = await resend.emails.send({
      from: "US GTM Engine <onboarding@resend.dev>",
      to: "sales@usgtmengine.com",
      replyTo: email,
      subject: "New inquiry from US GTM Engine website",
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || ""}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, result });
  } catch (error) {
    console.error("Resend error:", error);

    return Response.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}