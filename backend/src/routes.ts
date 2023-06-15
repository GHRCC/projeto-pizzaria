//aqui ficam as rotas da aplicação

import { Router } from "express";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";

const router = Router();

//--ROTAS USER --
router.post("/users", new CreateUserController().handle); //essa é a rota para criar usuário

router.post("/session", new AuthUserController().handle); //essa é a rota de login

export { router };
