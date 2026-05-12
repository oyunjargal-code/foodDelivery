import { getOrders } from "@/lib/services/getOrders";
import OrdersTable from "./_components/OrdersTable";

export interface Orders {
  id: number;
  userId: number;
  user: {
    email: string;
    address: string;
  };
  totalPrice: string;
  status: "PENDING" | "CANCELED" | "DELIVERED";
  foodOrderItems: {
    id: number;
    quantity: number;
    food: {
      name: string;
      image: string;
    };
  }[];
  createdAt: string;
  updatedAt: string;
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Orders</h1>
      <OrdersTable orders={orders} />
    </div>
  );
}
