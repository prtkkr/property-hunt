import mongoose from 'mongoose';

let connected = false;
const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (connected) {
    console.log('Connected to MongoDB');
    return;
  }

  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined');
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    connected = true;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    process.exit(1);
  }
};

export default connectDB;
