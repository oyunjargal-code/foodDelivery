import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { getCategories } from "@/src/lib/getCategories";
import { LayoutDashboard, Van } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  // const categoriesData = [
  //   { label: "All Dishes", count: 112 },
  //   { label: "Appetizers", count: 6 },
  //   { label: "Salads", count: 3 },
  //   { label: "Pizzas", count: 5 },
  //   { label: "Lunch favorites", count: 6 },
  //   { label: "Main dishes", count: 5 },
  //   { label: "Fish & Sea foods", count: 5 },
  //   { label: "Brunch", count: 5 },
  //   { label: "Side dish ", count: 5 },
  //   { label: "Desserts", count: 5 },
  //   { label: "Beverages", count: 5 },
  // ];

  const categories = await getCategories();

  return (
    <div className="flex gap-4">
      <div>
        <h1 className="text-[20px] font-semibol ">Dishes category</h1>
        <input type="text" className="border border-gray-300" />
        <Link href="/dashboard/foods">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
