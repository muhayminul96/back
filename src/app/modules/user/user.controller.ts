import express, { Request, Response }  from "express";
import { userService } from "./user.service";


const createUser =async (req:Request,res:Response) => {

    try{
        const user = req.body;
        const result = await userService.createUserIntoDb(user);

        res.status(200).json(
        {
            "success": true,
            "message": "User created successfully!",
            "data":result
        }

        )
    }
    catch(err){
        console.log(err)
     }

}


const getUser =async (req:Request,res:Response) => {

    try{
        
        const result = await userService.getUsersFromDb();

        res.status(200).json(
        {
            "success": true,
            "message": "Users fetched successfully!",
            "data":result
        }

        )
    }
    catch(err){
        console.log(err)
     }

}

const getOneUser =async (req:Request,res:Response) => {

    try{
        const {userId} = req.params;
        console.log(userId)
        const result = await userService.getUserFromDb(userId);

        res.status(200).json(
        {
            "success": true,
            "message": "Users fetched successfully!",
            "data":result
        }

        )
    }
    catch(err){
        console.log(err)
     }

}

export const UserController = {createUser,getUser,getOneUser};