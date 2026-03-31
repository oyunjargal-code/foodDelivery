import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOrders } from "@/lib/services/getOrders";

export interface Orders {
  id: number;
  userId: number;
  user: {
    email: string;
  };
  totalPrice: string;
  status: "PENDING" | "CANCELED" | "DELIVERED";
  foodOrderItems: {
    id: number;
    quantity: number;
    food: {
      name: string;
    };
  }[];
  createdAt: string;
  updatedAt: string;
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">№</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Food</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead>Delivery Address</TableHead>
            <TableHead>Delivery state</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.userId}</TableCell>
              <TableCell>{order.user.email}</TableCell>
              <TableCell>{order.createdAt}</TableCell>
              <TableCell>{order.totalPrice}</TableCell>
              <TableCell>{order.foodOrderItems.length}</TableCell>
              <TableCell className="text-right">{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
