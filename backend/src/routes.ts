//aqui ficam as rotas da aplicação

import { Router, Request, Response } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
  return res.json({ nome: "Lola's Pizzeria" });
});

router.get("/teste-erro", (req: Request, res: Response) => {
  throw new Error("Erro ao fazer a requisição"); //toda vez que quiser utilizar um "erro" na requisição, posso utilizar dessa maneira
});

export { router };
