import mongoose from "mongoose";

const { DB_URI } = process.env; // Adjust the MongoDB URL

const connection = {
  isConnected: false, // Initialize isConnected to false
};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(DB_URI, {});
    connection.isConnected = db.connections[0].readyState === 1; // Update isConnected based on readyState
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default dbConnect;
