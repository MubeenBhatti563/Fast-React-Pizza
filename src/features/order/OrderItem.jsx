import React from "react";

const OrderItem = ({ item }) => {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm px-1">
        <p>
          <span className="font-bold">{quantity}</span> {name}
        </p>
        <p className="font-bold">${totalPrice}</p>
      </div>
    </li>
  );
};

export default OrderItem;
