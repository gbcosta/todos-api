import { Request, Response } from "express";
import { DeleteTodoService } from "@services/deleteTodoService";

class DeleteTodoController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;

    const deleteTodoService = new DeleteTodoService();

    const todo = await deleteTodoService.execute(id);

    return res.status(200).json();
  }
}

const deleteTodoController = new DeleteTodoController();
export { deleteTodoController };
