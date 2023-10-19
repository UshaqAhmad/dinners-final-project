import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_store', {
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};


