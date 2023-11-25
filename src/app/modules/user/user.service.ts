import { UserModel } from "./user.model";
import User from "./user.interface";

const createUserIntoDb = async(user:User) => {
    const result =  await UserModel.create(user);

    return result;

}

const getUsersFromDb = async() => {
    const result =  await UserModel.find();

    return result;

}

const getUserFromDb = async(userId:number) => {
    const result =  await UserModel.findOne({userId});

    return result;

}


export const userService = {
     createUserIntoDb,
     getUsersFromDb,
     getUserFromDb
}
