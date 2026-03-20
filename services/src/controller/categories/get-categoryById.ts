import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const categori = await prisma.foodCategory.findMany({
    where: {
      id: Number(id),
    },
    include: { foods: true },
  });
  res.json(categori);
};
