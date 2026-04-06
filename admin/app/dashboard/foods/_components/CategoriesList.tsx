"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FoodAddDialog } from "./FoodAddDialog";
import { Category } from "./types";

export function CategoriesList({ categories }: { categories: Category[] }) {
  return (
    <div className="flex flex-col gap-4">
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col">
          <div>
            <h2>
              {category.name} ({category.foods.length})
            </h2>
          </div>
          <div className="flex gap-4">
            <Card className="w-[270.75px] h-[241px] relative mx-auto pt-0 flex flex-col items-center justify-center">
              <FoodAddDialog categories={categories} />
              <p className="text-sm">Add new Dish to {category.name} </p>
            </Card>
            <div className="grid grid-cols-3 gap-2">
              {category.foods.map((food) => (
                <Card
                  key={food.id}
                  className="relative mx-auto pt-0 w-[270.75px] h-[241px]"
                >
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  {food.image ? (
                    <img
                      src={food.image}
                      alt="Event cover"
                      className="relative z-20 aspect-video w-full object-cover dark:brightness-40"
                    />
                  ) : (
                    <img
                      src="https://avatar.vercel.sh/shadcn1"
                      alt="Event cover"
                      className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                  )}
                  <CardHeader>
                    <CardAction>
                      <Badge variant="secondary">{food.price}</Badge>
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
}
