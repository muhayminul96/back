import express from "express";
import { UserController } from "./user.controller";
const router = express.Router()

router.post('/',UserController.createUser)
router.get('/',UserController.getUser)
router.get('/:userId',UserController.getOneUser)
router.delete('/:userId',UserController.deleteUser)



export const UserRoutes = router;