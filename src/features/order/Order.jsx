import React from "react";
import { useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";
import { dateFormat, timeFormat } from "../../utils/utils";

const Order = () => {
  const order = useLoaderData();
  console.log("Order data", order);
  const {
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-xl font-semibold">Status</h2>
        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          Only {dateFormat(estimatedDelivery)} minutes left
        </p>
        <p className="text-xs text-stone-500">
          (Estimated Deliver: {timeFormat(estimatedDelivery)})
        </p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price Pizza: {orderPrice}
        </p>
        {priority && <p>Price priority: {priorityPrice}</p>}
        <p className="font-bold">
          To pay on delivery: {orderPrice + priorityPrice}
        </p>
      </div>
    </div>
  );
};

export default Order;
