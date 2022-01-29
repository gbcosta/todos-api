import express from "express";
import { createUserController } from "@controllers/createUserController";
import { getUsersController } from "@controllers/getUsersController";

const router = express.Router();

router.post("/users", createUserController.handle);
router.get("/users", getUsersController.handle);

export { router };
