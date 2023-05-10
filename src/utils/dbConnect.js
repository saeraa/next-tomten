import mongoose from "mongoose";

// In production, the .env file should obviously not be in the git repo, but given this is a school project this will do :)

const MONGODB_URI =
  "mongodb+srv://tomten:fOIfEIvdQ0Z6LOhl@cluster0.inwmtz7.mongodb.net/tomtens?retryWrites=true&w=majority";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
