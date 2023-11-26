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

const deleteUserFromDb = async(userId:number) => {
    const result =  await UserModel.deleteOne({userId});

    return result;

}

const updateUserIntoDb = async(user:User,userId:number) => {
    const result =  await UserModel.updateOne({userId},{
        $set: user
    });

    return result;

}


export const userService = {
     createUserIntoDb,
     getUsersFromDb,
     getUserFromDb,
     deleteUserFromDb,
     updateUserIntoDb
}
