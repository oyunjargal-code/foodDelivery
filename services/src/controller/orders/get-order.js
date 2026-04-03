"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const prisma_1 = require("../../lib/prisma");
const getOrders = async (req, res) => {
    try {
        const orders = await prisma_1.prisma.foodOrder.findMany({
            include: {
                foodOrderItems: { include: { food: true } },
                user: {
                    select: {
                        email: true,
                        id: true,
                        phoneNumber: true,
                        createdAt: true,
                    },
                },
            },
        });
        res.json({ orders });
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getOrders = getOrders;
//# sourceMappingURL=get-order.js.map