import express, { Request, Response } from "express";
import { getUsers } from "../controller/users/get-users";
import { getUserById } from "../controller/users/get-userById";
import { createUser } from "../controller/users/create-user";
import { updateUser } from "../controller/users/update-user";
import { addOrder } from "../controller/orders/add-order";

const router = express.Router();

router.post("/", addOrder);

// router.get("/:id", getUserById);

// router.post("/", createUser);

// router.put("/:id", updateUser);

export default router;
