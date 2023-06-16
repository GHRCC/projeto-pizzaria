import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //receber o token para permitir ou não que o usuário prossiga
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split("");

  try {
    //quero validar o token

    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    //recuperar o id do token e colocar dentro de uma variável user_id dentro do Request
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
