import { PrismaClient } from "@prisma/client";

export class GetTodosService {
  async execute(email) {
    const prisma = new PrismaClient();

    if (!email) throw new Error("email is required");

    const todos = await prisma.todo.findMany({
      where: {
        user: {
          email: email,
        },
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        todos: {
          every: {
            user: {
              email: email,
            },
          },
        },
      },
    });

    console.log(user.id);

    return todos;
  }
}
