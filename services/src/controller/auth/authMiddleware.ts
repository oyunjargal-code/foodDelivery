import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authorization = req.headers.authorization;
    const tokenKey = process.env.TOKEN_KEY;

    if (!authorization) {
      res.status(404).json({ message: "authorization required" });
      return;
    }
    console.log("=======3======");
    const accessToken = authorization.split(" ")[1];
    if (!accessToken || !tokenKey) {
      res.status(401).json({ message: "Not valid token" });
      return;
    }

    const { data } = jwt.verify(accessToken, tokenKey) as JwtPayload;
    req.user = data;
    next();
  } catch (err) {
    if (err instanceof Error) {
      err.name === "TokenExpiredError"
        ? res.status(401).json({ message: err.message })
        : res.status(500).json({ message: err.message });
    }
  }
};
