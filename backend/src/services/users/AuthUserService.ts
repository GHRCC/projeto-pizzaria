import prismaClient from "../../Prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
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

    //gerar um token JWT e devolver os dados do usuário, como id, name, email etc. Utilizamos o JWT quando queremos autenticar usuários em aplicações rest, ou seja, aplicações em que temos informações em formato de json. JSON Web Token garante a autenticidade.

    const token = sign(
      { name: user.name, email: user.email },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
