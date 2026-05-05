import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../cart/cartSlice";

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const isAdded = useSelector((state) => state.cart.cart).some(
    (item) => item.pizzaId === id,
  );
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt=""
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex justify-between items-center mt-auto">
          {!soldOut ? (
            <p className="text-sm">{unitPrice}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <Button
              type="small"
              onClick={isAdded ? () => dispatch(deleteItem(id)) : handleOnClick}
            >
              {isAdded ? "Delete" : "Add to cart"}
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
