import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createCategory = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  try {
    const categori = await prisma.foodCategory.create({
      data: { id, name },
    });
    res.status(200).json([categori]);
  } catch (error) {
    res.status(500).json(error);
  }

  const categori = await prisma.foodCategory.findMany({
    include: { foods: true },
  });
  res.json(categori);
};
