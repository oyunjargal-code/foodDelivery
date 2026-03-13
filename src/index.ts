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

// server.put("/users/:id", async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const { email, password, age } = req.body;

//   try {
//     const user = await prisma.user.upsert({
//       where: { id: 1 },
//       update: { age: 20 },
//       create: { id: 1, age: 30 },
//     });

//     res.status(200).json([user]);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

server.get("/categories", async (req: Request, res: Response) => {
  const categories = await prisma.foodCategory.findMany({
    include: { foods: true },
  });
  res.json(categories);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
