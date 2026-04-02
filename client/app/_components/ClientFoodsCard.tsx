import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge, CirclePlus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

export const ClientFoodsCard = async () => {
  const response = await fetch("http://localhost:3001/categories");
  const data: GetCategoriesResponse = await response.json();

  return (
    <div className="flex flex-col gap-4 mt-4">
      {data.categories.map((category) => (
        <div key={category.id} className="flex flex-col">
          <div className="ml-20">
            <h2>
              {category.name} ({category.foods.length})
            </h2>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="grid grid-cols-4 gap-2">
              {category.foods.map((food) => (
                <Card
                  key={food.id}
                  className="relative mx-auto pt-0 w-[270.75px] h-[241px]"
                >
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  <div className="flex relative">
                    <img
                      src="https://avatar.vercel.sh/shadcn1"
                      alt="Event cover"
                      className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <Button className="rounded-full  absolute left-4/5 top-3/4">
                      <Plus />
                    </Button>
                  </div>

                  <CardHeader>
                    <CardAction>
                      {/* <Badge variant="secondary">{food.price}</Badge> */}
                    </CardAction>
                    <CardTitle>{food.name}</CardTitle>
                    <CardDescription>{food.ingredients}</CardDescription>
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
