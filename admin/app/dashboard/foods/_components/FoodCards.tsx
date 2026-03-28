import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FoodAddDialog } from "./FoodAddDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export interface FoodCardsProps {
  foods: Foods[];
}

export interface Foods {
  id: number;
  name: string;
  price: string;
  image: string;
  ingredients: string;
  foodCategoyId: number;
  createdAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export async function FoodCards() {
  const data = await fetch("http://localhost:3001/foods");
  const foods: Foods[] = await data.json();

  return (
    <div className="gap-4 justify-center grid grid-cols-4">
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <FoodAddDialog />
      </Card>
      {foods.map((food) => (
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
  );
}
