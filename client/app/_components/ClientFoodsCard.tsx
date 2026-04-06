import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FoodCardDialog } from "./FoodsCardDialog";
import { Badge } from "lucide-react";

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

type ClientFoodsCardProps = {
  categories: Category[];
};

export const ClientFoodsCard = async ({ categories }: ClientFoodsCardProps) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col">
          <div className="ml-20 mb-8">
            <h2>
              {category.name} ({category.foods.length})
            </h2>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="grid grid-cols-3 gap-6">
              {category.foods.map((food) => (
                <Card
                  key={food.id}
                  className="w-[397.33px] relative mx-auto pt-0"
                >
                  <div className="absolute inset-0 z-30 aspect-video" />
                  <div className="flex relative h-[220px]">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="aspect-video w-full object-cover"
                    />
                    <div className="absolute buttom-2 right-2 z-40">
                      <FoodCardDialog food={food} />
                    </div>
                  </div>

                  <CardHeader className="p-3">
                    <CardAction className="text-xl">{food.price}</CardAction>
                    <CardTitle className="text-base font-semibold text-[#EF4444]">
                      {food.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {food.ingredients}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
