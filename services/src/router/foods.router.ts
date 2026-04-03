import express from "express";
import { getFoods } from "../controller/foods/get-foods";

import { createFood } from "../controller/foods/create-food";
import { updateFood } from "../controller/foods/update-food";
import { getFoodById } from "../controller/foods/get-foodById";

const router = express.Router();

router.get("/", getFoods);

router.get("/:id", getFoodById);

router.post("/", createFood);

router.put("/:id", updateFood);

export default router;
