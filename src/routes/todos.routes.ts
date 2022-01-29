import express from "express";
import { createTodoController } from "@controllers/createTodoController";
import { deleteTodoController } from "@controllers/deleteTodoController";
import { getTodosController } from "@controllers/getTodosController";
import { updateTodoController } from "@controllers/updateTodoController";

const router = express.Router();

router.post("/todos", createTodoController.handle);
router.get("/todos", getTodosController.handle);
router.delete("/todos", deleteTodoController.handle);
router.patch("/todos", updateTodoController.handle);

export { router };
