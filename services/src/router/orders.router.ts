import express from "express";
import { addOrder } from "../controller/orders/add-order";
import { getOrders } from "../controller/orders/get-order";
import { updateOrder } from "../controller/orders/update-order";

const router = express.Router();

router.post("/", addOrder);
router.get("/", getOrders);
router.put("/:id", updateOrder);

export default router;
