"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AddCategory } from "./AddCategory";
import { useState } from "react";
import { Category } from "./types";

export function Categories({ categories }: { categories: Category[] }) {
  const [select, setSelect] = useState<Number | null>(null);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button variant="outline">
        All Dishes
        <Badge variant="default" className="text-white">
          112
        </Badge>
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          onClick={() => setSelect(category.id)}
        >
          {category.name}
          <Badge variant="default" className="text-white">
            {category.foods?.length || 0}
          </Badge>
        </Button>
      ))}
      <AddCategory />
    </div>
  );
}
