import { getCategories } from "@/lib/services/getgetcategories";
import { Categories } from "./_components/Categories";

import { CategoriesList } from "./_components/CategoriesList";
import { Category, GetCategoriesResponse } from "./_components/types";

export default async function FoodsPage() {
  const categories = await getCategories();

  return (
    <div className="w-full">
      <div className="w-[1171px] min-h-[176px] mx-auto rounded-2xl bg-white flex justify-center items-center">
        <Categories categories={categories} />
      </div>
      <div className="w-[1171px] min-h-[176px] flex mx-auto rounded-2xl bg-white justify-center items-center my-4">
        <CategoriesList categories={categories} />
      </div>
    </div>
  );
}
