import {
  ClientFoodsCard,
  GetCategoriesResponse,
} from "./_components/ClientFoodsCard";
import Headers from "./_components/Headers";

export default async function Home() {
  const response = await fetch("http://localhost:3001/categories");
  const { categories }: GetCategoriesResponse = await response.json();

  return (
    <div className="w-360 mx-auto bg-[#404040] text-white text-2xl">
      <Headers />
      <ClientFoodsCard categories={categories} />
    </div>
  );
}
