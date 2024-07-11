import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file
// connecting to database
const connectDB = async () => {
  const connectionUrl = process.env.DB_URI;
  mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log("Getting Error from DB connection" + err.message))
  mongoose.set('strictQuery', false);
};

export default connectDB;
