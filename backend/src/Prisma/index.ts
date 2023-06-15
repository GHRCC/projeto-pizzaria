import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;

//com o prisma client consigo acessar todos os models do banco de dados, usuários, deletar, atualizar etc
