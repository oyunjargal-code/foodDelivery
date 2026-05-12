"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Orders } from "../page";

export default function OrdersTable({ orders }: { orders: Orders[] }) {
  const [orderList, setOrderList] = useState(orders);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState<string>("PENDING");

  const filteredOrders = orderList.filter((order) => {
    if (!startDate && !endDate) return true;
    const orderDate = new Date(order.createdAt);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    if (start && orderDate < start) return false;
    if (end && orderDate > end) return false;
    return true;
  });

  function handleSelect(id: number) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  }

  function handleSelectAll() {
    if (selectedIds.length === filteredOrders.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredOrders.map((o) => o.id));
    }
  }

  async function handleStatusChange(id: number, status: string) {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    setOrderList((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status: status as Orders["status"] }
          : order,
      ),
    );
  }

  async function handleBulkStatusChange() {
    await Promise.all(
      selectedIds.map((id) =>
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: modalStatus }),
        }),
      ),
    );

    setOrderList((prev) =>
      prev.map((order) =>
        selectedIds.includes(order.id)
          ? { ...order, status: modalStatus as Orders["status"] }
          : order,
      ),
    );

    setSelectedIds([]);
    setShowModal(false);
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Change delivery state</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
            <div className="flex gap-2 mb-6">
              {["PENDING", "DELIVERED", "CANCELED"].map((status) => (
                <button
                  key={status}
                  onClick={() => setModalStatus(status)}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                    modalStatus === status
                      ? status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                        : status === "DELIVERED"
                          ? "bg-green-100 text-green-700 border-green-300"
                          : "bg-red-100 text-red-700 border-red-300"
                      : "bg-gray-50 text-gray-500 border-gray-200"
                  }`}
                >
                  {status === "PENDING"
                    ? "Pending"
                    : status === "DELIVERED"
                      ? "Delivered"
                      : "Canceled"}
                </button>
              ))}
            </div>
            <button
              onClick={handleBulkStatusChange}
              className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <h2 className="text-lg font-bold">Orders</h2>
          <p className="text-sm text-gray-400">{filteredOrders.length} items</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <span className="text-sm text-gray-500">📅</span>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="text-sm outline-none"
            />
            <span className="text-gray-400">-</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="text-sm outline-none"
            />
          </div>
          <button
            onClick={() => {
              if (selectedIds.length === 0) {
                alert("Захиалга сонгоно уу!");
                return;
              }
              setShowModal(true);
            }}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800"
          >
            Change delivery state
          </button>
        </div>
      </div>

      <Table>
        <TableCaption className="mb-4 text-gray-400">
          Нийт {filteredOrders.length} захиалга
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-10">
              <input
                type="checkbox"
                checked={
                  selectedIds.length === filteredOrders.length &&
                  filteredOrders.length > 0
                }
                onChange={handleSelectAll}
                className="cursor-pointer"
              />
            </TableHead>
            <TableHead className="w-16 font-semibold text-gray-600">
              №
            </TableHead>
            <TableHead className="font-semibold text-gray-600">
              Customer
            </TableHead>
            <TableHead className="font-semibold text-gray-600">Food</TableHead>
            <TableHead className="font-semibold text-gray-600">Date</TableHead>
            <TableHead className="font-semibold text-gray-600">Total</TableHead>
            <TableHead className="font-semibold text-gray-600">
              Delivery Address
            </TableHead>
            <TableHead className="font-semibold text-gray-600">
              Delivery state
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow
              key={order.id}
              className={`hover:bg-gray-50 transition-colors ${
                selectedIds.includes(order.id) ? "bg-blue-50" : ""
              }`}
            >
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(order.id)}
                  onChange={() => handleSelect(order.id)}
                  className="cursor-pointer"
                />
              </TableCell>
              <TableCell className="font-medium text-gray-500">
                {order.id}
              </TableCell>
              <TableCell className="font-medium">{order.user.email}</TableCell>
              <TableCell>
                {order.foodOrderItems.length === 0 ? (
                  <span className="text-gray-400">-</span>
                ) : (
                  order.foodOrderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2 text-sm"
                    >
                      {item.food.image && (
                        <img
                          src={item.food.image}
                          alt={item.food.name}
                          className="w-8 h-8 rounded object-cover"
                        />
                      )}
                      {item.food.name}{" "}
                      <span className="text-gray-400">x{item.quantity}</span>
                    </div>
                  ))
                )}
              </TableCell>
              <TableCell className="text-gray-500">
                {new Date(order.createdAt).toLocaleDateString("mn-MN")}
              </TableCell>
              <TableCell className="font-medium">
                {order.totalPrice === "NaN" || !order.totalPrice ? (
                  <span className="text-gray-400">-</span>
                ) : (
                  `$${parseFloat(order.totalPrice).toFixed(2)}`
                )}
              </TableCell>
              <TableCell className="text-gray-500 text-sm">
                {order.user.address || "-"}
              </TableCell>
              <TableCell>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer border-none outline-none appearance-none ${
                    order.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "DELIVERED"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  <option value="PENDING">Pending</option>
                  <option value="DELIVERED">Delivered</option>
                  <option value="CANCELED">Canceled</option>
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
