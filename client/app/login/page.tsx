// import LoginForm from "./_components/LoginForm";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen bg-[#404040] flex items-center justify-center">
//       <LoginForm />
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/services/signIn";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./_components/LoginForm";

export default function Home() {
  return (
    <div className="w-[1440px] mx-auto flex justify-between h-screen">
      <div className="w-[416px] h-[376px] flex items-center justify-center mt-100">
        <LoginForm />
      </div>
      <div className="w-[900px] overflow-hidden rounded-4xl ">
        <img
          src="/images/img.jpg"
          alt="faceImg"
          className="h-screen object-cover"
        />
      </div>
    </div>
  );
}
