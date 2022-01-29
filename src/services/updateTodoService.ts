import { PrismaClient } from "@prisma/client";

export class UpdateTodoService {
  async execute({ id, content, title }) {
    const prisma = new PrismaClient();

    if (!id) throw new Error("id is required");
    else if (!content && !title) throw new Error("Missing arguments");

    const todoData = prisma.todo.findUnique({
      where: {
        id: id,
      },
      select: {
        content: true,
        title: true,
      },
    });

    if (!content) content = (await todoData).content;
    if (!title) title = (await todoData).title;

    const todo = prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
      },
    });

    return todo;
  }
}
