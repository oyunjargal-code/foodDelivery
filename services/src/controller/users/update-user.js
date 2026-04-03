"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const prisma_1 = require("../../lib/prisma");
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    try {
        const user = await prisma_1.prisma.user.update({
            where: {
                id: Number(id),
            },
            data: { email },
        });
        res.status(200).json([user]);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.updateUser = updateUser;
//# sourceMappingURL=update-user.js.map