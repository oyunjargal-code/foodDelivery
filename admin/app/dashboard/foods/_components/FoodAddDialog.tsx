"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Category, getgetCategories } from "@/lib/services/getgetcategories";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useState } from "react";

export function FoodAddDialog() {
  const categories = getgetCategories();

  const [food, setFood] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full w-9 h-9 bg-red-500 text-white text-[16px]"
          >
            {" "}
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-bold">Dishes info</DialogTitle>
          </DialogHeader>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Dish name</p>
            </div>
            <div>
              <Input
                className="w-[288px] h-[36px]"
                type="text"
                placeholder="Food name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Dish category</p>
            </div>
            <div>
              <CategoriesSelect categories={categories} />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Ingredients</p>
            </div>
            <div>
              <Input
                className="w-[288px] h-[36px]"
                type="text"
                placeholder="Fluffy pancakes..."
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Price</p>
            </div>
            <div>
              <Input
                className="w-[288px] h-[36px]"
                type="number"
                placeholder="Price"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

type CategoriesSelectProps = {
  categories: Category[];
};

export function CategoriesSelect(props: CategoriesSelectProps) {
  const { categories } = props;

  // console.log(categories);
  return (
    <div className="w-[288px] h-[36px]">
      <div>
        <Select>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categories.map((category) => {
                return (
                  <SelectItem key={category.id} value={String(category.id)}>
                    {category.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
