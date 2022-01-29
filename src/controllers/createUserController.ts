import { Request, Response } from "express";
import { CreateUserService } from "@services/createUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name: name,
      email: email,
    });

    return res.json(user);
  }
}

const createUserController = new CreateUserController();
export { createUserController };
