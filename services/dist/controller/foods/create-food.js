"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFood = void 0;
const prisma_1 = require("../../lib/prisma");
const createFood = async (req, res) => {
    const { name, price, foodCategoyId, ingredients } = req.body;
    try {
        const food = await prisma_1.prisma.food.create({
            data: { name, price, ingredients, foodCategoyId: Number(foodCategoyId) },
        });
        res.status(200).json([food]);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.createFood = createFood;
