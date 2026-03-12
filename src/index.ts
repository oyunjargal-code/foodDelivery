import express from "express";
import { Request, Response } from "express";
import { prisma } from "./lib/prisma";

const server = express();
const port = 3000;

server.use(express.json());

server.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
