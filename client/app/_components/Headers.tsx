"use client";

import { ShoppingCartIcon, UserKey } from "lucide-react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/auth";

export const Headers = () => {
  const router = useRouter();

  async function handleLogout() {
    const confirm = window.confirm("Гарахдаа итгэлтэй байна уу?");
    if (!confirm) return;

    await logoutUser();
    router.push("/login");
  }

  return (
    <div className="w-[1440px] mx-auto">
      <div className="w-full bg-black text-white mx-auto flex justify-between">
        <div className="flex gap-4">
          <div className="mt-12 ml-20">
            <img
              src="/images/headerLogo.svg"
              alt="logo"
              className="w-[46px] h-[38px]"
            />
          </div>
          <div className="mt-10 mb-10">
            <p>
              Nom<span className="text-red-700 font-bold">Nom</span>
            </p>
            <p>
              <span>Swift delivery</span>
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center mr-20">
          <ShoppingCartIcon />
          <UserKey onClick={handleLogout} className="cursor-pointer" />
        </div>
      </div>
      <div className="h-[570px]">
        <img src="/images/BG.png" alt="BG" />
      </div>
    </div>
  );
};

export default Headers;
