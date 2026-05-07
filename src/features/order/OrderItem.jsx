import React from "react";

const OrderItem = ({ item, isLoadingIngredients, ingredients }) => {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm px-1">
        <p>
          <span className="font-bold">{quantity}</span> {name}
        </p>
        <p className="font-bold">${totalPrice}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
};

export default OrderItem;
