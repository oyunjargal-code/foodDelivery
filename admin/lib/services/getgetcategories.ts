import { Category } from "@/app/dashboard/foods/_components/types";

export interface GetCategoriesResponse {
  categories: Category[];
}

export const getCategories = async () => {
  const data = await fetch("http://localhost:3001/categories");
  const { categories }: GetCategoriesResponse = await data.json();

  return categories;
};
