import express from "express";
import { UserController } from "./user.controller";
const router = express.Router()

router.post('/',UserController.createUser)
router.get('/',UserController.getUser)
router.get('/:userId',UserController.getOneUser)
router.delete('/:userId',UserController.deleteUser)
router.put('/:userId',UserController.updateUser)
router.put('/:userId/orders',UserController.addOrder)



export const UserRoutes = router;