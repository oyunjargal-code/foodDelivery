import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Headers from "./_components/Headers";
import { Badge } from "lucide-react";
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

export default async function Home() {
  const response = await fetch("http://localhost:3001/categories");
  const data: GetCategoriesResponse = await response.json();

  return (
    <div className="w-[1440px] mx-auto bg-[#404040] text-white text-2xl">
      <Headers />
      <div>
        <h1>Food Delivery</h1>
      </div>
      <div className="flex flex-col gap-4">
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

      {/* {data.categories.map((category) => {
        return (
          <div key={category.id}>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                  src="https://avatar.vercel.sh/shadcn1"
                  alt="Event cover"
                  className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">Featured</Badge>
                  </CardAction>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>
                    {category.}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">View Event</Button>
                </CardFooter>
              </Card>
              {category.foods.map((food) => {
                console.log(food);
                return (
                  <div key={food.id}>
                    <h1>{food.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
