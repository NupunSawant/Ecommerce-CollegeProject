import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // ⏳ increases timeout to 30s
    });

    console.log(
      `✅ MongoDB connected: ${conn.connection.host}`.cyan.bold.underline
    );
  } catch (err) {
    console.error(`❌ Error: ${err.message}`.red.underline);
    process.exit(1);
  }
};

export default connectDB;
