import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // For example: SendGrid, Resend, Nodemailer, etc.
    // For now, we'll just log it and return success
    console.log('Contact Form Submission:', { name, email, message });

    // TODO: Integrate with your preferred email service
    // Example with SendGrid:
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   from: email,
    //   subject: `Portfolio Contact from ${name}`,
    //   text: message,
    // });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
