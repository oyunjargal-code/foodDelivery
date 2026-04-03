"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodById = void 0;
const prisma_1 = require("../../lib/prisma");
const getFoodById = async (req, res) => {
    const foods = await prisma_1.prisma.food.findMany({
        include: {
            category: true,
        },
    });
    res.json(foods);
};
exports.getFoodById = getFoodById;
