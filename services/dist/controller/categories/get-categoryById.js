"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryById = void 0;
const prisma_1 = require("../../lib/prisma");
const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const categori = await prisma_1.prisma.foodCategory.findMany({
        where: {
            id: Number(id),
        },
        include: { foods: true },
    });
    res.json(categori);
};
exports.getCategoryById = getCategoryById;
