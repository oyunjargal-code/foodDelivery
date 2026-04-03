"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const prisma_1 = require("../../lib/prisma");
const getUsers = async (req, res) => {
    try {
        const users = await prisma_1.prisma.user.findMany();
        res.json({ users });
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getUsers = getUsers;
//# sourceMappingURL=get-users.js.map