import Headers from "./_components/Headers";

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
    <div>
      <Headers />
      <div className="w-[1440px] mx-auto">
        <h1>Food Delivery</h1>
      </div>
      {data.categories.map((category) => {
        return (
          <div key={category.id}>
            <h1 className="font-bold">{category.name}</h1>
            <div>
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
      })}
    </div>
  );
}
