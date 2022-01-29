import { PrismaClient } from "@prisma/client";

class GetUsersService {
  async execute() {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany({
      include: {
        todos: true,
      },
    });

    return users;
  }
}

export { GetUsersService };
