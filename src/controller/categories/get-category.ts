import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getCategory = async (req: Request, res: Response) => {
  const categories = await prisma.foodCategory.findMany();
  res.json({ categories });
};
