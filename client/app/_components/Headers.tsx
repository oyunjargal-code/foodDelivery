"use client";

import { ShoppingCartIcon, UserKey } from "lucide-react";
import { useRouter } from "next/navigation";
import { logoutUser, getEmailFromToken } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const Headers = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const { totalCount } = useCart();

  useEffect(() => {
    const token = document.cookie.includes("token");
    setIsLoggedIn(token);
    setEmail(getEmailFromToken());
  }, []);

  async function handleClick() {
    if (isLoggedIn) {
      const confirm = window.confirm("Гарахдаа итгэлтэй байна уу?");
      if (!confirm) return;
      await logoutUser();
      setIsLoggedIn(false);
      router.push("/login");
    } else {
      router.push("/login");
    }
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
          {email && <span className="text-sm text-white">{email}</span>}
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <ShoppingCartIcon />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </div>
          <UserKey onClick={handleClick} className="cursor-pointer" />
        </div>
      </div>
      <div className="h-[570px]">
        <img src="/images/BG.png" alt="BG" />
      </div>
    </div>
  );
};

export default Headers;
