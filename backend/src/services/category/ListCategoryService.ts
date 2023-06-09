import { PrismaClient } from "@prisma/client";
import prismaClient from "../../Prisma";

class ListCategoryService {
  async execute() {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { ListCategoryService };
