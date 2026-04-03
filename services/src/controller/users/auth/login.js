"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const prisma_1 = require("../../../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = async (req, res) => {
    const { email, password } = req.body;
    const tokenKey = process.env.TOKEN_KEY;
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user)
        return res.status(404).json({ message: "user not found" });
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (isMatch) {
        const accessToken = jsonwebtoken_1.default.sign({
            data: {
                userId: user.id,
                email: user.email,
                role: "user",
            },
        }, tokenKey, { expiresIn: "1h" });
        res.status(200).json({ accessToken });
    }
    else {
        res.status(400).json({ message: "invalid credentials" });
    }
    //   try {
    //     const result = await bcrypt.compare(password, "hash");
    //     res.send("ok");
    //   } catch (error) {
    //     res.status(500).json(error);
    //   }
};
exports.login = login;
//# sourceMappingURL=login.js.map