import { ClientFoodsCard } from "./_components/ClientFoodsCard";
import Headers from "./_components/Headers";

export default async function Home() {
  return (
    <div className="w-[1440px] mx-auto bg-[#404040] text-white text-2xl">
      <Headers />
      <ClientFoodsCard />
    </div>
  );
}
