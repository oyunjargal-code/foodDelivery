import { Category } from "@/app/dashboard/foods/_components/types";

export interface GetCategoriesResponse {
  categories: Category[];
}

export const getCategories = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const { categories }: GetCategoriesResponse = await data.json();

  return categories;
};
