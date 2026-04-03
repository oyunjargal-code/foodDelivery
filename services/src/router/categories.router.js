"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_categoryById_1 = require("../controller/categories/get-categoryById");
const create_category_1 = require("../controller/categories/create-category");
const update_category_1 = require("../controller/categories/update-category");
const get_category_1 = require("../controller/categories/get-category");
const authMiddleware_1 = require("../controller/auth/authMiddleware");
const authAdminMiddleware_1 = require("../controller/auth/authAdminMiddleware");
const router = express_1.default.Router();
router.get("/", get_category_1.getCategory);
router.get("/:id", get_categoryById_1.getCategoryById);
router.post("/", authMiddleware_1.authMiddleware, authAdminMiddleware_1.authAdminMiddleware, create_category_1.createCategory);
router.put("/:id", authMiddleware_1.authMiddleware, authAdminMiddleware_1.authAdminMiddleware, update_category_1.updateCategory);
exports.default = router;
//# sourceMappingURL=categories.router.js.map