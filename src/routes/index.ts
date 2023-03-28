import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = new UserController();

router.post("/user", userController.createUser);
router.get("/user/:id", userController.findUserById); 
router.put("/user", userController.updateUserById);

export {router};