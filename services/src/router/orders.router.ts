import express, { Request, Response } from "express";

import { addOrder } from "../controller/orders/add-order";
import { getOrders } from "../controller/orders/get-order";

const router = express.Router();

router.post("/", addOrder);

// router.get("/:id", getUserById);

router.get("/", getOrders);

// router.put("/:id", updateUser);

export default router;
