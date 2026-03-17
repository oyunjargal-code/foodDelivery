import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const addOrder = async (req: Request, res: Response) => {
  try {
    const order = await prisma.foodOrder.create({
      data: {
        status: "pending",
        totalPrice: "100",
      },
    });

    const orderItem = await prisma.foodOrderItems.create({
      data: {
        foodId: 1,
        quantity: 2,
        foodOrderId: order.id,
      },
    });
    res.json({ order, orderItem });
  } catch (error) {
    res.status(500).json(error);
  }
};
