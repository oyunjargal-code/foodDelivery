"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_router_1 = __importDefault(require("./router/users.router"));
const categories_router_1 = __importDefault(require("./router/categories.router"));
const foods_router_1 = __importDefault(require("./router/foods.router"));
const orders_router_1 = __importDefault(require("./router/orders.router"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
const port = 3001;
server.use(express_1.default.json());
server.use("/users", users_router_1.default);
server.use("/categories", categories_router_1.default);
server.use("/foods", foods_router_1.default);
server.use("/orders", orders_router_1.default);
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
