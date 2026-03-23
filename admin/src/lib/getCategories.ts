type Category = {
  id: string;
  name: string;
  count: number;
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch("http://localhost:3001/categories");
  const data = await res.json();
  return data;
};
