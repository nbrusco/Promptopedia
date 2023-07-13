import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "promptopedia",
    });
    isConnected = true;
    console.log("Mongo DB connected");
  } catch (error) {
    console.log(error);
  }
};
