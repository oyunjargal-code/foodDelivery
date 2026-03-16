import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createFood = async (req: Request, res: Response) => {
  const { name, price, foodCategoyId } = req.body;

  try {
    const food = await prisma.food.create({
      data: { name, price, foodCategoyId: Number(foodCategoyId) },
    });
    res.status(200).json([food]);
  } catch (error) {
    res.status(500).json(error);
  }
};
