import { NextRequest, NextResponse } from 'next/server';
import getClientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, uid, rating, feedback } = body;

    // Validate required fields
    if (!name || !rating || !feedback) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const timestamp = new Date();
    
    // Create feedback document
    const feedbackDoc = {
      name,
      uid: uid || 'Not provided',
      rating,
      feedback,
      timestamp: timestamp.toISOString(),
      createdAt: timestamp,
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

