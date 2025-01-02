import mongoose from "mongoose";

// MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Define the cached object to store the Mongoose connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // Augment the Node.js global object to include the Mongoose cache
  var _mongoose: MongooseCache | undefined;
}

let cached = global._mongoose;

if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  // If already connected, return the existing connection
  if (cached?.conn) {
    return cached.conn;
  }

  if (!cached?.promise) {
    // Create a new promise to establish a connection
    const opts = {
      bufferCommands: false,
    };

    cached!.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
  }

  // Wait for the promise to resolve and cache the connection
  cached!.conn = await cached!.promise;
  return cached!.conn;
}
