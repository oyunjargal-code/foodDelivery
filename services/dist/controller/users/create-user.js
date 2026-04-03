"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = async (req, res) => {
    const { email, password, age } = req.body;
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    try {
        const user = await prisma_1.prisma.user.create({
            data: { email, password: hashedPassword },
        });
        res.status(200).json([user]);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.createUser = createUser;
