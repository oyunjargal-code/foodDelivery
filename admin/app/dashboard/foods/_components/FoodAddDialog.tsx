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
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Category } from "./types";
import { uploadImage } from "@/src/lib/upload";

type FoodAddDialogProps = {
  categories: Category[];
};

type Food = {
  foodName: string;
  price: string;
  categoryId: null | string;
  ingredients: string;
};

export function FoodAddDialog({ categories }: FoodAddDialogProps) {
  const [food, setFood] = useState<Food>({
    foodName: "",
    price: "",
    categoryId: null,
    ingredients: ",",
  });

  const [image, setImage] = useState<File | null>(null);

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const onAddCategory = async () => {
    setLoading(true);
    const formData = new FormData();

    if (image === null) {
      setLoading(false);
      return;
    }

    formData.append("image", image);

    const { url }: any = await uploadImage(formData);
    console.log("Uploaded URL:", url);

    if (!url) {
      setLoading(false);
      return;
    }

    const postBody = {
      name: food.foodName,
      price: food.price,
      foodCategoyId: food.categoryId,
      ingredients: food.ingredients,
      image: url,
    };
    console.log("Post body:", postBody);
    try {
      await fetch("http://localhost:3001/foods", {
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

  const onSelectCategory = (categoryId: string) => {
    setFood({ ...food, categoryId: categoryId });
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
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
                name="foodName"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Dish category</p>
            </div>
            <div>
              <CategoriesSelect
                categories={categories}
                onSelect={onSelectCategory}
              />
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
                name="ingredients"
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
                type="text"
                placeholder="Price"
                name="price"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Image</p>
            </div>
            <div>
              <Input
                className="w-[288px] h-[36px]"
                type="file"
                placeholder="Price"
                name="price"
                onChange={(event) => {
                  if (event?.target?.files?.[0]) {
                    setImage(event?.target?.files?.[0]);
                  }
                }}
              />
              {image && (
                <img src={URL.createObjectURL(image)} height={100} alt="food" />
              )}
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
                "Save changes"
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
  onSelect: (categoryId: string) => void;
};

export function CategoriesSelect(props: CategoriesSelectProps) {
  const { categories, onSelect } = props;

  // console.log(categories);
  return (
    <div className="w-[288px] h-[36px]">
      <div>
        <Select onValueChange={onSelect}>
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
