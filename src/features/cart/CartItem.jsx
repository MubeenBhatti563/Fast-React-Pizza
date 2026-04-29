import React from "react";
import Button from "../../ui/Button";

const CartItem = ({ item }) => {
  const { name, quantity, totalPrice } = item;
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-center">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">${totalPrice}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
};

export default CartItem;
