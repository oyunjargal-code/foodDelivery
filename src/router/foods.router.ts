import express, { Request, Response } from "express";
import { getFoods } from "../controller/foods/get-foods";
import { getFoodById } from "../controller/foods/get-foodById";
import { createFood } from "../controller/foods/create-food";
import { updateFood } from "../controller/foods/update-food";

const router = express.Router();

router.get("/foods", getFoods);

router.get("/foods/:id", getFoodById);

router.post("/foods", createFood);

router.put("/foods/:id", updateFood);

export default router;
