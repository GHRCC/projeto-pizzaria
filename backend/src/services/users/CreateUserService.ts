import prismaClient from "../../Prisma";
import { hash } from "bcryptjs"; //programa para criptografar a senha do usuário e não ficar aparecendo no banco de dados

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //verificar se colocou o email
    if (!email) {
      throw new Error("Email incorrect");
    }

    //verificar se o email já está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { email: email },
    }); //essa funcionalidade faz com que procure se tem um email que é igual a um email já existente

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    //criando um user no banco de dados
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },

      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
