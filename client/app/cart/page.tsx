"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeFromCart, totalCount } = useCart();
  const router = useRouter();

  const totalPrice = items
    .reduce(
      (sum, item) =>
        sum +
        parseFloat(item.food.price.replace(/[^0-9.]/g, "")) * item.quantity,
      0,
    )
    .toFixed(2);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Миний сагс</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Сагс хоосон байна</p>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.food.id}
              className="flex items-center gap-4 border rounded-lg p-4"
            >
              <img
                src={item.food.image}
                alt={item.food.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="font-semibold text-[#EF4444]">
                  {item.food.name}
                </h2>
                <p className="text-sm text-gray-500">{item.quantity} ширхэг</p>
                <p className="font-bold">
                  $
                  {(
                    parseFloat(item.food.price.replace(/[^0-9.]/g, "")) *
                    item.quantity
                  ).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.food.id)}
                className="text-red-500 hover:text-red-700"
              >
                Устгах
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4">
            <p className="font-bold text-lg">Нийт:</p>
            <p className="font-bold text-lg">${totalPrice}</p>
          </div>

          <button
            className="w-full bg-[#EF4444] text-white py-3 rounded-lg hover:bg-red-600"
            onClick={() => router.push("/checkout")}
          >
            Захиалах
          </button>
        </div>
      )}
    </div>
  );
}
