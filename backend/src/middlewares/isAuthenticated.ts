import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
 console.log(req.headers)
  //receber o token
  const authToken = req.headers.authorization;
  if (!authToken) {
    console.log(authToken);
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");
  console.log("token", token)
  try {
    //validar o token
    const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad;
    //recuperar o id do token e colocar dentro de uma variável user_id dentro do res
   
   console.log("texto sub",sub)
    req.user_id = sub;

    return next();
  } catch (err) {
    console.log("um texto", err);
    return res.status(401).end();
  }
}
