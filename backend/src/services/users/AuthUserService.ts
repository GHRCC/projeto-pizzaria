import prismaClient from "../../Prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //verificar se o email existe
    const user = await prismaClient.user.findFirst({ where: { email: email } });
    if (!user) {
      throw new Error("User/password incorrect");
    }

    //verificar se a senha digitada está correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    //gerar um token JWT e devolver os dados do usuário, como id, name, email etc

    return { ok: true };
  }
}

export { AuthUserService };
