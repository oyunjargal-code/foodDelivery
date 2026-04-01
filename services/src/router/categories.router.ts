import express, { Request, Response } from "express";
import { getCategoryById } from "../controller/categories/get-categoryById";
import { createCategory } from "../controller/categories/create-category";
import { updateCategory } from "../controller/categories/update-category";
import { getCategory } from "../controller/categories/get-category";
import { authMiddleware } from "../controller/auth/authMiddleware";
import { authAdminMiddleware } from "../controller/auth/authAdminMiddleware";

const router = express.Router();

router.get("/", getCategory);

router.get("/:id", getCategoryById);

router.post("/", authMiddleware, authAdminMiddleware, createCategory);

router.put("/:id", authMiddleware, authAdminMiddleware, updateCategory);

export default router;
