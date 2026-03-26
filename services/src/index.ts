import express from "express";
import cors from "cors";
import usersRouter from "./router/users.router";
import categoriesRouter from "./router/categories.router";
import foodsRouter from "./router/foods.router";
import ordersRouter from "./router/orders.router";

const server = express();
server.use(cors({ origin: "http://localhost:3000" }));
const port = 3001;

server.use(express.json());

server.use("/users", usersRouter);

server.use("/categories", categoriesRouter);

server.use("/foods", foodsRouter);

server.use("/orders", ordersRouter);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
