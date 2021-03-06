import { Request, Response } from "express";
import { CreateTodoService } from "@services/createTodoService";

class CreateTodoController {
  async handle(req: Request, res: Response) {
    const { title, content, email } = req.body;

    const createTodoService = new CreateTodoService();

    const todo = await createTodoService.execute({
      content: content,
      title: title,
      email: email,
    });

    return res.json(todo);
  }
}

const createTodoController = new CreateTodoController();
export { createTodoController };
