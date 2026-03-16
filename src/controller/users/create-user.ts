import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, age } = req.body;

  try {
    const user = await prisma.user.create({
      data: { email, password, age },
    });
    res.status(200).json([user]);
  } catch (error) {
    res.status(500).json(error);
  }
};
