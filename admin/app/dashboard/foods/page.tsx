import { Categories } from "./_components/Categories";

import { FoodCards } from "./_components/FoodCards";

export default async function FoodsPage() {
  return (
    <div className="w-full">
      <div className="w-[1171px] min-h-[176px] mx-auto rounded-2xl bg-white flex justify-center items-center">
        <Categories />
      </div>
      <div className="w-[1171px] min-h-[176px] flex mx-auto rounded-2xl bg-white justify-center items-center my-4">
        <FoodCards />
      </div>
    </div>
  );
}
