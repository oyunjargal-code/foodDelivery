export interface getCategories {
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

export const getCategories = async () => {
  const res = await fetch("http://localhost:3001/categories");
  const data: getCategories = await res.json();
  return data.categories;
};
