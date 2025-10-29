import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    // Initialize Resend inside the function to avoid build-time errors
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await request.json();

    const { name, email, phone, service, subject, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 422 });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email' }, { status: 422 });
    }

    // Send email using Resend
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">New Contact Form Submission</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #374151;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          This message was sent from the Camino Concepts website contact form.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'leads@resend.dev',
      to: [process.env.TEST_TO_EMAIL || 'caminoconcepts0@gmail.com'],
      subject: subject || `New Contact Form Message from ${name}`,
      html: emailHtml,
      replyTo: email, // Allow easy replies to the customer
    });

    return NextResponse.json({ 
      message: 'Message sent successfully!' 
    }, { status: 200 });

  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ 
      message: 'Failed to send message. Please try again.' 
    }, { status: 500 });
  }
}
