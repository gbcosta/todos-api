import express from "express";
import { CreateUserController } from "@controllers/createUserController";
import { GetUserController } from "@controllers/getUserController";

const router = express.Router();

const createUserController = new CreateUserController();
const getUserController = new GetUserController();

router.post("/users", createUserController.handle);

router.get("/users", getUserController.handle);

export { router };
