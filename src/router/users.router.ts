import express, { Request, Response } from "express";
import { getUsers } from "../controller/users/get-users";
import { getUserById } from "../controller/users/get-userById";
import { createUser } from "../controller/users/create-user";

const router = express.Router();

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.post("/users", createUser);

export default router;
