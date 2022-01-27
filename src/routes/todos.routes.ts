import express from "express";
import { CreateTodoController } from "@controllers/createTodoController";
import { DeleteTodoController } from "@controllers/deleteTodoController";

const router = express.Router();

const createTodoController = new CreateTodoController();
const deleteTodoController = new DeleteTodoController();

router.post("/todos", createTodoController.handle);

router.delete("/todos", deleteTodoController.handle);

export { router };
