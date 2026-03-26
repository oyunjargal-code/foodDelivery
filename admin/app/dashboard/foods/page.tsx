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

export function FoodAddDialog() {
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
            <Input
              className="w-[288px] h-[36px]"
              type="text"
              placeholder="Food name"
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
