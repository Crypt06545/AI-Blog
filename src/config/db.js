import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/AI-Blog`
    );
    console.log(
      `MONGODB Conntection Successfull!! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB Contnnection Failed`, error);
    process.exit(1);
  }
};
export default ConnectDB;
