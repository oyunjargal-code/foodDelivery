"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        const tokenKey = process.env.TOKEN_KEY;
        if (!authorization) {
            res.status(404).json({ message: "authorization required" });
            return;
        }
        console.log("=======3======");
        const accessToken = authorization.split(" ")[1];
        if (!accessToken || !tokenKey) {
            res.status(401).json({ message: "Not valid token" });
            return;
        }
        const { data } = jsonwebtoken_1.default.verify(accessToken, tokenKey);
        req.user = data;
        next();
    }
    catch (err) {
        if (err instanceof Error) {
            err.name === "TokenExpiredError"
                ? res.status(401).json({ message: err.message })
                : res.status(500).json({ message: err.message });
        }
    }
};
exports.authMiddleware = authMiddleware;
