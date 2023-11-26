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
        console.log(err);
        res.status(404).json(
            {
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            }
        )
     }

}

const deleteUser =async (req:Request,res:Response) => {

    try{
        const {userId} = req.params;
        const result = await userService.deleteUserFromDb(userId);

        res.status(200).json(
            {
                "success": true,
                "message": "User deleted successfully!",
                "data" : null
            }

        )
    }
    catch(err){
        console.log(err);
        res.status(404).json(
            {
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            }
        )
     }

}

const updateUser =async (req:Request,res:Response) => {

    try{
        const user = req.body;
        const {userId} = req.params;

        const result = await userService.updateUserIntoDb(user,userId);

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

export const UserController = {createUser,getUser,getOneUser,deleteUser,updateUser};