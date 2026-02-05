import { NextRequest, NextResponse } from 'next/server';
import getClientPromise from '@/lib/mongodb';
import { checkRateLimit, sanitizeString, sanitizeRating, getClientIP, isContentSafe } from '@/lib/security';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - 5 feedback submissions per minute per IP
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(`feedback:${clientIP}`, { 
      windowMs: 60000, 
      maxRequests: 5 
    });
    
    if (rateLimit.isLimited) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil(rateLimit.resetIn / 1000)
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil(rateLimit.resetIn / 1000)),
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }

    const body = await request.json();
    const { name, uid, rating, feedback } = body;

    // Validate required fields
    if (!name || !rating || !feedback) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeString(name, 100);
    const sanitizedUid = sanitizeString(uid, 50);
    const sanitizedFeedback = sanitizeString(feedback, 2000);
    const sanitizedRating = sanitizeRating(rating);

    // Validate sanitized inputs
    if (!sanitizedName || sanitizedName.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (!sanitizedRating) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    if (!sanitizedFeedback || sanitizedFeedback.length < 10) {
      return NextResponse.json(
        { error: 'Feedback must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Check for suspicious content
    if (!isContentSafe(sanitizedFeedback) || !isContentSafe(sanitizedName)) {
      return NextResponse.json(
        { error: 'Invalid content detected' },
        { status: 400 }
      );
    }

    const timestamp = new Date();
    
    // Create feedback document with sanitized data
    const feedbackDoc = {
      name: sanitizedName,
      uid: sanitizedUid || 'Not provided',
      rating: sanitizedRating,
      feedback: sanitizedFeedback,
      timestamp: timestamp.toISOString(),
      createdAt: timestamp,
      ip: clientIP, // Store for abuse tracking
    };

    // Connect to MongoDB
    const client = await getClientPromise();
    const db = client.db('fcwmc-feedback');
    const collection = db.collection('feedbacks');

    // Insert feedback into MongoDB
    const result = await collection.insertOne(feedbackDoc);

    return NextResponse.json({
      success: true,
      message: 'Feedback saved successfully',
      id: result.insertedId.toString(),
      data: feedbackDoc
    });

  } catch (error) {
    console.error('Error saving feedback:', error);
    return NextResponse.json(
      { error: 'Failed to save feedback', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

