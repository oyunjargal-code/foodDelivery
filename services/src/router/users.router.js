"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_users_1 = require("../controller/users/get-users");
const get_userById_1 = require("../controller/users/get-userById");
const create_user_1 = require("../controller/users/create-user");
const update_user_1 = require("../controller/users/update-user");
const login_1 = require("../controller/users/auth/login");
const router = express_1.default.Router();
router.get("/", get_users_1.getUsers);
router.get("/:id", get_userById_1.getUserById);
router.post("/", create_user_1.createUser);
router.put("/:id", update_user_1.updateUser);
router.post("/auth", login_1.login);
exports.default = router;
//# sourceMappingURL=users.router.js.map