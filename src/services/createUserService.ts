import { PrismaClient } from "@prisma/client";

export class CreateUserService {
  async execute({ name, email }) {
    const prisma = new PrismaClient();
    console.log(name, email);
    if (!name && !email) {
      throw new Error("Name or email are required");
    }

    const emailAlredyExists = await prisma.user.findFirst({
      where: { email },
    });

    if (emailAlredyExists) {
      throw new Error("Email already exists");
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });

    return user;
  }
}
