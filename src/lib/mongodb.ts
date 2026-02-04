import { MongoClient } from 'mongodb';

const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

let cachedClientPromise: Promise<MongoClient> | null = null;

function getClientPromise(): Promise<MongoClient> {
  if (!process.env.MONGODB_URI) {
    throw new Error('Please add your MONGODB_URI to .env.local');
  }

  if (cachedClientPromise) {
    return cachedClientPromise;
  }

  const uri = process.env.MONGODB_URI;
  const options = {};

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!globalWithMongo._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    cachedClientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    const client = new MongoClient(uri, options);
    cachedClientPromise = client.connect();
  }

  return cachedClientPromise;
}

// Export a function that returns the MongoClient promise.
// This lazy loading approach prevents errors during build time.
export default getClientPromise;
