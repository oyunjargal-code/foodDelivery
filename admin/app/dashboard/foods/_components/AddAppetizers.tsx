"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ChangeEventHandler, useState } from "react";

export function AddAppetizers() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCategoryName(event.target.value);
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
      <Dialog open={open} onOpenChange={setOpen}>
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
              <Input type="text" value={categoryName} onChange={onChange} />
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
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
