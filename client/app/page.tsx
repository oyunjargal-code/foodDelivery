import {
  ClientFoodsCard,
  GetCategoriesResponse,
} from "./_components/ClientFoodsCard";
import Headers from "./_components/Headers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const { categories }: GetCategoriesResponse = await response.json();

  return (
    <div className="w-360 mx-auto bg-[#404040] text-white text-2xl">
      <Headers />
      <ClientFoodsCard categories={categories} />
    </div>
  );
}
