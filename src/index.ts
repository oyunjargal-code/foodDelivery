import express from "express";
import { Request, Response } from "express";
import { prisma } from "./lib/prisma";
import usersRouter from "./router/users.router";
import categoriesRouter from "./router/categories.router";
import foodsRouter from "./router/foods.router";

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());

server.use("/users", usersRouter);

server.use("/categories", categoriesRouter);

server.use("/foods", foodsRouter);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
