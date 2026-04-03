"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_foods_1 = require("../controller/foods/get-foods");
const get_foodById_1 = require("../controller/foods/get-foodById");
const create_food_1 = require("../controller/foods/create-food");
const update_food_1 = require("../controller/foods/update-food");
const router = express_1.default.Router();
router.get("/", get_foods_1.getFoods);
router.get("/:id", get_foodById_1.getFoodById);
router.post("/", create_food_1.createFood);
router.put("/:id", update_food_1.updateFood);
exports.default = router;
