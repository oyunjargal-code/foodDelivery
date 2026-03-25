import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/src/lib/getCategories";
import { Plus } from "lucide-react";

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
import { Label } from "radix-ui";
// import { Label } from "@/components/ui/label";

export default async function FoodsPage() {
  const categories = await getCategories();

  return (
    <div>
      <div className="w-[1171px] h-[176px] bg-white flex flex-col gap-4 opacity-100 rounded-xl p-6 ">
        <h1 className="text-[20px] font-semibol pb-2">Dishes category</h1>
        <div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button key={category.id} variant="outline">
                {category.name}
                <Badge variant="default" className="text-white">
                  {category.foods?.length || 0}
                </Badge>
              </Button>
            ))}
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full w-9 h-9 bg-red-500 text-white text-[16px]"
                  >
                    <Plus />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-[18px] font-bold">
                      Add new category
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                      <p className="font-bold text-[14px]">Category name</p>
                      <Input />
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-end">
                    <Button type="button">Add category</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
