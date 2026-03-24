import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/src/lib/getCategories";

export default async function FoodsPage() {
  const categories = await getCategories();

  return (
    <div>
      <div className="w-[1171px] h-[176px] bg-white flex flex-col gap-4 opacity-100 rounded-xl p-6">
        <h1 className="text-[20px] font-semibol pb-2">Dishes category</h1>

        <div className="flex gap-2">
          {categories.map((category) => (
            <Button key={category.id} variant="outline">
              {category.name}
              <Badge variant="default" className="text-white">
                {category.foods?.length || 0}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
