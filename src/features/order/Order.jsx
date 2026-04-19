import React from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const order = useLoaderData();
  console.log("Order data", order);
  const { status, priority, priorityPrice, orderPrice, estimatedDelivery } =
    order;

  return (
    <div>
      <div>
        <h2>Status</h2>
        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>{estimatedDelivery}</p>
        <p>(Estimated Deliver: {estimatedDelivery})</p>
      </div>

      <div>
        <p>Price Pizza: {orderPrice}</p>
        {priority && <p>Price priority: {priorityPrice}</p>}
        <p>To pay on delivery: {orderPrice + priorityPrice}</p>
      </div>
    </div>
  );
};

export default Order;
