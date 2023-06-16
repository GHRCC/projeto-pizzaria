//aqui ficam as rotas da aplicação

import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/products/CreateProductController";
import { ListByCategoryController } from "./controllers/products/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import uploadConfig from "./config/Multer";

const router = Router();
const upload = multer(uploadConfig.upload("../temp"));

//--ROTAS USER --
router.post("/users", new CreateUserController().handle); //essa é a rota para criar usuário

router.post("/session", new AuthUserController().handle); //essa é a rota de login

//aqui eu crio um middleware que verifica o token para saber se o usuário pode prosseguir ou não. Chamamos isso de middleware de autenticação. Ele fica no meio. Primeiro chama o middleware e depois chama a aplicação.
router.get("/me", isAuthenticated, new DetailUserController().handle);

//-- ROTAS CATEGORY --

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

//--ROTAS PRODUCT
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

//--ROTAS ORDER

router.post("/order", isAuthenticated, new CreateOrderController().handle);

router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

export { router };
