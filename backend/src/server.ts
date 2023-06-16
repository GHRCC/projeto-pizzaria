//arquivo principal, quando eu rodar a aplicação é ele que vai rodar

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"; //utilizar para criar uma barreira em cima de um middleware, caso haja algum erro, para que o usuário veja que houve erro. Segundo a biblioteca, esse import tem que ficar sempre em 2
import { router } from "./routes";
import cors from "cors";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router); //estou dizendo para o app utilizar o router como roteamento

app.use("/files", express.static(path.resolve(__dirname, "..", "temp")));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //se for uma instância do tipo error, quero lançar uma excessão
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "internal server error.",
  });
});

app.listen(3333, () => console.log("Servidor on-line"));
