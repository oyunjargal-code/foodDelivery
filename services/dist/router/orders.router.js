"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add_order_1 = require("../controller/orders/add-order");
const get_order_1 = require("../controller/orders/get-order");
const router = express_1.default.Router();
router.post("/", add_order_1.addOrder);
// router.get("/:id", getUserById);
router.get("/", get_order_1.getOrders);
// router.put("/:id", updateUser);
exports.default = router;
