import { Request, Response } from "express";
import { ListOrdersSevice } from "../../services/order/ListOrdersService";

class ListOrdersController {
  async handle(req: Request, res: Response) {
    const listOrdersService = new ListOrdersSevice();
    const orders = await listOrdersService.execute();
    return res.json(orders);
  }
}

export { ListOrdersController };
