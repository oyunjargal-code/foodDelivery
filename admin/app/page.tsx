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

  // const categories = await getCategories();

  return (
    <div className="flex gap-4">
      {/* <div>
        <SidebarProvider className="bg-[#FFFFFF]">
          <Sidebar style={{ backgroundColor: "white" }}>
            <SidebarHeader>
              <div className="flex gap-2">
                <img className="w-10 h-10 m-2" src="/nomnom_logo.svg" alt="" />
                <div className="font-serif">
                  <h1 className="font-semibold">NomNom</h1>
                  <h4>Swift delivery</h4>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup></SidebarGroup>

              <SidebarGroup>
                <div className="flex justify-center">
                  <Button className="w-40 h-10 rounded-2xl text-[14px] font-serif">
                    <LayoutDashboard />
                    Food menu
                  </Button>
                </div>
              </SidebarGroup>
              <SidebarGroup>
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    className="w-40 h-10 rounded-2xl text-[14px] font-serif"
                  >
                    <Van />
                    Orders
                  </Button>
                </div>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>Hul</SidebarFooter>
          </Sidebar>
        </SidebarProvider>
      </div> */}
      <div>
        <h1>Dishes category</h1>
        <input type="text" className="border border-gray-300" />
        <Link href="/dashboard/foods">
          <button>Login</button>
        </Link>
        {/* <div className="flex gap-2">
          {categories.map((category) => (
            <Button key={category.id} variant="outline">
              {category.name}
              <Badge variant="default" className="text-white">
                {category.foods.map((food) => food.id)}
              </Badge>
            </Button>
          ))}
        </div> */}
      </div>
    </div>
  );
}
