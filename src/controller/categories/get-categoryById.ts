import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getCategoryById = async (req: Request, res: Response) => {
  const categori = await prisma.foodCategory.findMany({
    include: { foods: true },
  });
  res.json(categori);
};
