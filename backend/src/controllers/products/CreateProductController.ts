import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    if (!req.file) {
      throw new Error("Upload error");
    } else {
      const { originalname, filename: banner } = req.file;

      const createProductServices = new CreateProductService();
      const product = await createProductServices.execute({
        name,
        price,
        description,
        banner,
        category_id,
      });

      return res.json(product);
    }
  }
}

export { CreateProductController };
