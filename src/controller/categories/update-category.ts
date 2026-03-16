import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const categori = await prisma.foodCategory.update({
      where: { id: Number(id) },
      data: { name },
    });
    res.status(200).json([categori]);
  } catch (error) {
    res.status(500).json(error);
  }
};
