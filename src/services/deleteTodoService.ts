import { PrismaClient } from "@prisma/client";

export class DeleteTodoService {
  async execute(id) {
    const prisma = new PrismaClient();
    console.log(id);

    const todo = await prisma.todo.delete({
      where: {
        id: id,
      },
    });

    return todo;
  }
}
