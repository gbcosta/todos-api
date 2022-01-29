import { Response, Request } from "express";
import { GetTodosService } from "@services/getTodosService";

class GetTodosController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const getTodosService = new GetTodosService();

    const todos = await getTodosService.execute(email);

    return res.json(todos);
  }
}

const getTodosController = new GetTodosController();

export { getTodosController };
