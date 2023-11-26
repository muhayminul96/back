import { UserModel } from "./user.model";
import User from "./user.interface";

const createUserIntoDb = async (user: User) => {
  const result = await UserModel.create(user);

  return {
    userId: result.userId,
    username: result.username,
    fullName: result.fullName,
    age: result.age,
    email: result.email,
    isActive: result.isActive,
    hobbies: result.hobbies,
    address: result.address,
  };
};

const getUsersFromDb = async () => {
  const result = await UserModel.find().select("-password");

  return result;
};

const getUserFromDb = async (userId: number) => {
  const result = await UserModel.findOne({ userId }).select("-password");

  return result;
};

const deleteUserFromDb = async (userId: number) => {
  const result = await UserModel.deleteOne({ userId });

  return result;
};

const updateUserIntoDb = async (user: User, userId: number) => {
  const result = await UserModel.updateOne(
    { userId },
    {
      $set: user,
    }
  );

  return result;
};

const addOrderIntoDb = async (order: any, userId: number) => {
  const user = await UserModel.findOne({ userId });

  if (user) {
    const result = await UserModel.updateOne(
      { userId },
      {
        $push: {
          orders: order,
        },
      }
    );

    return result;
  } else return {};
};


const getOrderFromDb = async (userId: number) => {
  const result = await UserModel.findOne({ userId }).select("-_id orders");

  return result;
};

export const userService = {
  createUserIntoDb,
  getUsersFromDb,
  getUserFromDb,
  deleteUserFromDb,
  updateUserIntoDb,
  addOrderIntoDb,
  getOrderFromDb
};
