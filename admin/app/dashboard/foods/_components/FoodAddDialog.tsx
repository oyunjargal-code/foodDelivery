"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoaderCircle, Plus } from "lucide-react";
import { useState } from "react";
import { Category } from "./types";

type FoodAddDialogProps = {
  categories: Category[];
};

export function FoodAddDialog({ categories }: FoodAddDialogProps) {
  const [food, setFood] = useState({});

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const onAddCategory = async () => {
    if (!categoryName) {
      console.log("Нэр хоосон байна!");
      return;
    }

    setLoading(true);
    const postBody = {
      name: categoryName,
    };
    try {
      await fetch("http://localhost:3001/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });
      setOpen(false);
      router.refresh();
    } catch (error) {
      setError(error as string);
      console.log(error);
    }
    setLoading(false);
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
                onChange={handleChange}
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
          <DialogFooter className="sm:justify-between">
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
            <Button type="button" onClick={onAddCategory} disabled={loading}>
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Add category"
              )}
            </Button>
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
