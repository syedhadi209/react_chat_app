import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to Database!!!");
  } catch (error) {
    console.log("Error Connecting to database : ", error.message);
  }
};

export { connectToDb };
