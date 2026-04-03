"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminMiddleware = void 0;
const authAdminMiddleware = async (req, res, next) => {
    const isAdmin = req.user?.role;
    if (isAdmin !== "admin") {
        res.status(401).json({ message: "Admin role required" });
        return;
    }
    next();
};
exports.authAdminMiddleware = authAdminMiddleware;
//# sourceMappingURL=authAdminMiddleware.js.map