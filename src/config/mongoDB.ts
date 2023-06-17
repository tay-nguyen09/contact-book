import mongoose from "mongoose";
import { messeges } from "../utils/constants";

const checkConnectMongoDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_DB_URL as string)
      .then(() => {
        return messeges.success;
      })
      .catch((err: Error) => {
        throw messeges.fail + err;
      });
    return messeges.success;
  } catch (error) {
    return error;
  }
};

export { checkConnectMongoDB };
