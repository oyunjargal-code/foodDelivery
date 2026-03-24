"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { LayoutDashboard, Van } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-center">
            <Link
              href="/dashboard/foods"
              className={`${pathname === "/dashboard/foods" && "bg-black text-white w-40 h-10 rounded-2xl"}`}
            >
              <Button
                variant="ghost"
                className="w-40 h-10 rounded-2xl text-[14px] font-serif"
              >
                <LayoutDashboard />
                Food menu
              </Button>
            </Link>
          </div>
        </SidebarGroup>
        <SidebarGroup>
          <div className="flex justify-center">
            <Link
              href="/dashboard/orders"
              className={`${pathname === "/dashboard/orders" && "bg-black text-white w-40 h-10 rounded-2xl"}`}
            >
              <Button
                variant="ghost"
                className="w-40 h-10 rounded-2xl text-[14px] font-serif"
              >
                <Van />
                Orders
              </Button>
            </Link>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
