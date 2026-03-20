import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const categori = await prisma.foodCategory.create({
      data: { name },
    });
    res.status(200).json([categori]);
  } catch (error) {
    res.status(500).json(error);
  }
};
