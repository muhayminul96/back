import { Schema, model, connect } from "mongoose";
import { UserModel, User } from "./user.interface";
import config from "../../config";
const bcrypt = require("bcrypt");

const userSchema = new Schema<User, UserModel>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [{ type: String, required: true }],
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: [
    {
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

userSchema.statics.isUserExist = async (userId: any) => {
  const existingUser = UserModel.findOne({userId});
  return existingUser;
};

userSchema.pre("save", async function (next) {
  const user = this;

  this.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );

  // console.log("saving");

  next();
});

userSchema.post("save", function () {
  // console.log("done");
});

export const UserModel  = model<User>("User", userSchema);
