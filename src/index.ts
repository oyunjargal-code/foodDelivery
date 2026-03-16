import express from "express";
import { Request, Response } from "express";
import { prisma } from "./lib/prisma";

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());

server.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

server.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
  });
  res.status(200).json(user);
});

server.post("/users", async (req: Request, res: Response) => {
  const { email, password, age } = req.body;

  try {
    const user = await prisma.user.create({
      data: { email, password, age },
    });
    res.status(200).json([user]);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.put("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const { email } = req.body;

  try {
    const userId = await prisma.user.update({
      where: { id: Number(id) },
      data: { email },
    });

    res.status(200).json(userId);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/categories", async (req: Request, res: Response) => {
  const categories = await prisma.foodCategory.findMany({
    include: { foods: true },
  });
  res.json(categories);
});

server.put("/categories/:id", async (req: Request, res: Response) => {
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
});

server.get("/foods", async (req: Request, res: Response) => {
  const foods = await prisma.food.findMany({
    include: {
      category: true,
    },
  });

  res.json(foods);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
