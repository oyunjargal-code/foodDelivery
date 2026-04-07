import { Orders } from "@/app/dashboard/orders/page";

export interface GetOrdersResponse {
  orders: Orders[];
}

export const getOrders = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
  const { orders }: GetOrdersResponse = await data.json();

  return orders;
};
