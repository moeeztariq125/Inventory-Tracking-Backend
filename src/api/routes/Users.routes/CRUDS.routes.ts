import { Router } from "express";
import { userController } from "../../../loaders/controllers";
const router = Router();

router.route('/')
.get(userController.getUser)
.put(userController.updateUser)
.post(userController.createUser)
.delete(userController.deleteUser)


export default router