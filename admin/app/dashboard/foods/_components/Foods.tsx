import { AddAppetizers } from "./AddAppetizers";

export interface Food {
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

export async function Foods() {
  const data = await fetch("http://localhost:3001/foods");
  const foods: Food[] = await data.json();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {foods.map((food) => (
        <div className="w-20 h-20 rounded-2xl border bg-zinc-100" key={food.id}>
          <div>{food.name}</div>
        </div>
      ))}
      <AddAppetizers />
    </div>
  );
}
