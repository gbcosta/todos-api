import { Request, Response } from "express";
import { DeleteTodoService } from "@services/deleteTodoService";

export class DeleteTodoController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    const deleteTodoService = new DeleteTodoService();

    await deleteTodoService.excute(id);

    return res.status(200);
  }
}
