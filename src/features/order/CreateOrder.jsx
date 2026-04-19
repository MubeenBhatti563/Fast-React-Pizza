import React from "react";
import { Form, useNavigation } from "react-router-dom";

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
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div>
          <label htmlFor="customer">First name</label>
          <div>
            <input type="text" name="customer" required />
          </div>
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <div>
            <input type="number" name="phone" id="phone" />
          </div>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <div>
            <input type="tel" name="address" id="address" />
          </div>
        </div>

        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
