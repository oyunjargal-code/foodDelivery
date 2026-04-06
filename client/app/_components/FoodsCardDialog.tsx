import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus } from "lucide-react";
import { Food } from "./ClientFoodsCard";

type FoodCardDialogProps = {
  food: Food;
};

export const FoodCardDialog = ({ food }: FoodCardDialogProps) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger>
          <div className="rounded-full w-[50px] h-[50px] absolute left-82 top-39 bg-[#FFFFFF] text-[#EF4444] p-3 hover:bg-zinc-500 cursor-pointer">
            <Plus />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
