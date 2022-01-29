import { Request, Response } from "express";
import { GetUsersService } from "@services/getUsersService";

class GetUsersController {
  async handle(req: Request, res: Response) {
    const getUsersService = new GetUsersService();

    const users = await getUsersService.execute();

    return res.json(users);
  }
}

const getUsersController = new GetUsersController();
export { getUsersController };
