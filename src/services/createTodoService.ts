import { PrismaClient } from "@prisma/client";

export class CreateTodoService {
  async execute({ title, content, email }) {
    const prisma = new PrismaClient();

    if (!title || !content || !email) {
      throw new Error("Tittle, content and email are required");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const todo = await prisma.todo.create({
      data: {
        title,
        content,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
        user: true,
      },
    });

    return todo;
  }
}
