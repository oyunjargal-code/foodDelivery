import { AddCategory } from "./_components/AddCategory";
import { Categories } from "./_components/Categories";

export default async function FoodsPage() {
  return (
    <div className="flex flex-wrap gap-2 p-2 items-center">
      <Categories />
      <AddCategory />
    </div>
  );
}
