"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = void 0;
const prisma_1 = require("../../lib/prisma");
const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const categori = await prisma_1.prisma.foodCategory.update({
            where: { id: Number(id) },
            data: { name },
        });
        res.status(200).json([categori]);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.updateCategory = updateCategory;
//# sourceMappingURL=update-category.js.map