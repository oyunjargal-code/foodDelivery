import express, { Request, Response } from "express";
import { getCategoryById } from "../controller/categories/get-categoryById";
import { createCategory } from "../controller/categories/create-category";
import { updateCategory } from "../controller/categories/update-category";
import { getCategory } from "../controller/categories/get-category";

const router = express.Router();

router.get("/", getCategory);

router.get("/:id", getCategoryById);

router.post("/", createCategory);

router.put("/:id", updateCategory);

export default router;
