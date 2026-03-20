import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { email } = req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: { email },
    });
    res.status(200).json([user]);
  } catch (error) {
    res.status(500).json(error);
  }
};
