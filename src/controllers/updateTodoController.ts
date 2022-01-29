import { Request, Response } from "express";
import { UpdateTodoService } from "@services/updateTodoService";

class UpdateTodoController {
  async handle(req: Request, res: Response) {
    const { id, title, content } = req.body;

    const updateTodoService = new UpdateTodoService();

    const todo = await updateTodoService.execute({
      id: id,
      content: content,
      title: title,
    });

    return res.json(todo);
  }
}

const updateTodoController = new UpdateTodoController();

export { updateTodoController };
