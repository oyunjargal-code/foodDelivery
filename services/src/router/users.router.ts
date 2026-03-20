import express, { Request, Response } from "express";
import { getUsers } from "../controller/users/get-users";
import { getUserById } from "../controller/users/get-userById";
import { createUser } from "../controller/users/create-user";
import { updateUser } from "../controller/users/update-user";
import { login } from "../controller/users/auth/login";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

router.put("/:id", updateUser);

router.post("/auth", login);

export default router;
