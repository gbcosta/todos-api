import { PrismaClient } from "@prisma/client";

export class DeleteTodoService {
  async excute(id) {
    const prisma = new PrismaClient();

    const todo = await prisma.todo.delete({
      where: {
        id: id,
      },
    });

    return todo;
  }
}
