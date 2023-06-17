import mongoose from "mongoose";
const userContactsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please add name"],
    },
    phone_number: {
      type: String,
      require: [true, "please add phone_number"],
    },
    email: {
      type: String,
      require: [true, "please add email"],
    },
  },
  {
    timestamps: true,
  }
);
export const UserContactsModel = mongoose.model(
  "UserContacts",
  userContactsSchema
);
