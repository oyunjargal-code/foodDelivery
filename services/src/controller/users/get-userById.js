"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const prisma_1 = require("../../lib/prisma");
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await prisma_1.prisma.user.findFirst({
        where: {
            id: Number(id),
        },
    });
    res.status(200).json(user);
};
exports.getUserById = getUserById;
//# sourceMappingURL=get-userById.js.map