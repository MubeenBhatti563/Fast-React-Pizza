import React from "react";
import { Form, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";

const CreateOrder = () => {
  const navigation = useNavigation();
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
    <div>
      <h2 className="text-lg my-6">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" className="flex flex-col gap-6">
        <div>
          <label htmlFor="customer">First name</label>
          <div>
            <input type="text" name="customer" required className="input" />
          </div>
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <div>
            <input type="number" name="phone" id="phone" className="input" />
          </div>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <div>
            <input
              type="tel"
              name="address"
              id="address"
              className="input"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
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
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
