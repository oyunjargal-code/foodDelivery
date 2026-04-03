"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const prisma_1 = require("../../lib/prisma");
const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const categori = await prisma_1.prisma.foodCategory.create({
            data: { name },
        });
        res.status(200).json([categori]);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.createCategory = createCategory;
