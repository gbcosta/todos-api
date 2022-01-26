import { Request, Response } from "express";
import { GetUserService } from "../services/getUserService";

class GetUserController {
  async handle(req: Request, res: Response) {
    const getUserService = new GetUserService();

    const users = await getUserService.execute();

    return res.json(users);
  }
}

export { GetUserController };
