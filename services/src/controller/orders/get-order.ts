import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.foodOrder.findMany({
      include: {
        foodOrderItems: true,
        user: true,
      },
    });

    res.json({ orders });
  } catch (error) {
    res.status(500).json(error);
  }
};
