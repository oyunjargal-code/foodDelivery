import express, { Request, Response } from "express";
import { getUsers } from "../controller/users/get-users";
import { getCategoryById } from "../controller/categories/get-categoryById";
import { createCategory } from "../controller/categories/create-category";
import { updateCategory } from "../controller/categories/update-category";

const router = express.Router();

router.get("/categories", getUsers);

router.get("/categories/:id", getCategoryById);

router.post("/categories", createCategory);

router.put("/categories/:id", updateCategory);

export default router;
