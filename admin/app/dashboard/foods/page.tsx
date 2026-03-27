import { Categories } from "./_components/Categories";
// import { Foods } from "./_components/Foods";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Category, getgetCategories } from "@/lib/services/getgetcategories";
import { getCategories } from "@/src/lib/getCategories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function FoodsPage() {
  return (
    <div className="w-full">
      <div className="w-[1171px] min-h-[176px] mx-auto rounded-2xl bg-white flex justify-center items-center">
        <Categories />
      </div>
      <div>{/* <Foods /> */}</div>
      <div>
        <FoodAddDialog />
      </div>
    </div>
  );
}

export async function FoodAddDialog() {
  const categories = await getgetCategories();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add new Dish to Appetizers </Button>
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
  );
}
