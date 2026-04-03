"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFood = void 0;
const prisma_1 = require("../../lib/prisma");
const updateFood = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const food = await prisma_1.prisma.food.update({
            where: { id: Number(id) },
            data: { name },
        });
        res.status(200).json([food]);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.updateFood = updateFood;
