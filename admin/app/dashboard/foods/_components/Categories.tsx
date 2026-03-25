import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface GetCategoriesResponse {
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
}

export interface Food {
  id: number;
  name: string;
  price: string;
  image: string;
  ingredients: string;
  foodCategoyId: number;
  createdAt: string;
  updatedAt: string;
}

export async function Categories() {
  const data = await fetch("http://localhost:3001/categories");
  const { categories }: GetCategoriesResponse = await data.json();

  return (
    <div>
      {categories.map((category) => (
        <Button key={category.id} variant="outline">
          {category.name}
          <Badge variant="default" className="text-white">
            {category.foods?.length || 0}
          </Badge>
        </Button>
      ))}
    </div>
  );
}
