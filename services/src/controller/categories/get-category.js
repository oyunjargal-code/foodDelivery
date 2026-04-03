"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategory = void 0;
const prisma_1 = require("../../lib/prisma");
const getCategory = async (_req, res) => {
    const categories = await prisma_1.prisma.foodCategory.findMany({
        include: {
            foods: true,
        },
    });
    res.json({ categories });
};
exports.getCategory = getCategory;
//# sourceMappingURL=get-category.js.map