import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  // We don't throw at import time so `next build` works without a DB.
  // The API route will surface a clear error at request time.
  console.warn(
    "[InfluenceX] MONGODB_URI is not set. Add it to .env.local before submitting the contact form."
  );
}

let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is missing. Set it in .env.local to enable database writes."
    );
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
