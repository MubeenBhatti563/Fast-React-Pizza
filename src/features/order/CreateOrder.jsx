import React from "react";
import { Form, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

const CreateOrder = () => {
  const navigation = useNavigation();
  const username = useSelector((state) => state.user.username);
  const isSubmitting = navigation.state === "submitting";
  const cart = [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl mb-8 font-semibold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="customer">
            First name
          </label>
          <div className="grow">
            <input
              type="text"
              name="customer"
              defaultValue={username}
              required
              className="input"
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="phone">
            Phone number
          </label>
          <div className="grow">
            <input type="number" name="phone" id="phone" className="input" />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="address">
            Address
          </label>
          <div className="grow">
            <input
              type="tel"
              name="address"
              id="address"
              className="input"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-5 mb-12">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
