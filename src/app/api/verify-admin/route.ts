import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      );
    }

    // Get admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD not set in environment variables');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Hash the provided password using SHA-256
    const hashedInputPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex');

    // Hash the admin password for comparison
    const hashedAdminPassword = crypto
      .createHash('sha256')
      .update(adminPassword)
      .digest('hex');

    // Compare hashed passwords
    const isValid = hashedInputPassword === hashedAdminPassword;

    if (isValid) {
      return NextResponse.json({ success: true, authenticated: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error verifying password:', error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
