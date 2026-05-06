"use client";

import LoginForm from "./_components/LoginForm";

export default function Home() {
  return (
    <div className="w-[1440px] mx-auto flex justify-between h-screen">
      <div className="w-[416px] h-[376px] flex items-center justify-center mt-100">
        <LoginForm />
      </div>
      <div className="w-[900px] overflow-hidden rounded-4xl">
        <img
          src="/images/img.jpg"
          alt="faceImg"
          className="h-screen object-cover"
        />
      </div>
    </div>
  );
}
