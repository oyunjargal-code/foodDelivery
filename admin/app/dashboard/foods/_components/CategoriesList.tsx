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

import { Category, Food } from "./types";

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
          <div className="flex">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <FoodAddDialog />
            </Card>
            <div className="grid grid-cols-4 gap-4">
              {category.foods.map((food) => (
                <Card className="relative mx-auto w-full max-w-sm pt-0">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                  />
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
