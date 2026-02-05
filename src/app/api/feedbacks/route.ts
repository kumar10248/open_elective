import { NextRequest, NextResponse } from 'next/server';
import getClientPromise from '@/lib/mongodb';
import { checkRateLimit, getClientIP } from '@/lib/security';

interface Feedback {
  name: string;
  uid: string;
  rating: number;
  feedback: string;
  timestamp: string;
  filename?: string;
}

export async function GET(request: NextRequest) {
  try {
    // Rate limiting - 30 requests per minute
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(`feedbacks-get:${clientIP}`, { 
      windowMs: 60000, 
      maxRequests: 30 
    });
    
    if (rateLimit.isLimited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Connect to MongoDB
    const client = await getClientPromise();
    const db = client.db('fcwmc-feedback');
    const collection = db.collection('feedbacks');

    // Fetch all feedbacks, sorted by most recent first
    const feedbacks = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Convert MongoDB documents to plain objects
    const feedbacksData: Feedback[] = feedbacks.map(doc => ({
      name: doc.name,
      uid: doc.uid,
      rating: doc.rating,
      feedback: doc.feedback,
      timestamp: doc.timestamp,
    }));

    // Calculate statistics
    const count = feedbacksData.length;
    const averageRating = count > 0 
      ? feedbacksData.reduce((sum: number, f: Feedback) => sum + f.rating, 0) / count 
      : 0;

    return NextResponse.json({
      success: true,
      feedbacks: feedbacksData,
      count,
      averageRating: Math.round(averageRating * 10) / 10
    });

  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feedbacks', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Rate limiting - 3 delete operations per hour
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(`feedbacks-delete:${clientIP}`, { 
      windowMs: 3600000, // 1 hour
      maxRequests: 3 
    });
    
    if (rateLimit.isLimited) {
      return NextResponse.json(
        { error: 'Too many delete requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Connect to MongoDB
    const client = await getClientPromise();
    const db = client.db('fcwmc-feedback');
    const collection = db.collection('feedbacks');

    // Delete all feedbacks
    await collection.deleteMany({});

    return NextResponse.json({
      success: true,
      message: 'All feedbacks cleared'
    });

  } catch (error) {
    console.error('Error clearing feedbacks:', error);
    return NextResponse.json(
      { error: 'Failed to clear feedbacks' },
      { status: 500 }
    );
  }
}

