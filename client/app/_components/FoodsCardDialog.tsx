"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Minus } from "lucide-react";
import { Food } from "./ClientFoodsCard";
import { useState } from "react";

type FoodCardDialogProps = {
  food: Food;
};

export const FoodCardDialog = ({ food }: FoodCardDialogProps) => {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = (parseFloat(food.price) * quantity).toFixed(2);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-full w-[50px] h-[50px] absolute left-82 top-39 bg-[#FFFFFF] text-[#EF4444] p-3 hover:bg-zinc-500 cursor-pointer">
          <Plus />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <div className="flex flex-col gap-4">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <div>
            <h2 className="text-xl font-bold text-[#EF4444]">{food.name}</h2>
            <p className="text-sm text-gray-500">{food.ingredients}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-500">Total price</p>
            <p className="font-bold">${totalPrice}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="rounded-full w-8 h-8 bg-gray-100 flex items-center justify-center"
              >
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="rounded-full w-8 h-8 bg-gray-100 flex items-center justify-center"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            className="w-full bg-[#EF4444] text-white hover:bg-red-600"
            onClick={() => alert("Cart-д нэмлээ!")}
          >
            Add to cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
