import { Orders } from "@/app/dashboard/orders/page";

export interface GetOrdersResponse {
  orders: Orders[];
}

export const getOrders = async () => {
  const data = await fetch("http://localhost:3001/orders");
  const { orders }: GetOrdersResponse = await data.json();

  return orders;
};
