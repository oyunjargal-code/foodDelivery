import { NextFunction, Request, Response } from "express";

export const authAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const isAdmin = req.user?.role;

  if (isAdmin !== "admin") {
    res.status(401).json({ message: "Admin role required" });
    return;
  }

  next();
};
