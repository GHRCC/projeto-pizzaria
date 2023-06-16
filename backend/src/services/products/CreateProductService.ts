import prismaClient from "../../Prisma";

//criando um tipo do typescript, em que todo mundo que quiser fazer a requisição terá que botar esses parâmetros
interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ProductRequest) {
    return { ok: true };
  }
}

export { CreateProductService };
