import React from "react";
import { Form, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

const CreateOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // 1. Corrected Selector: Destructure from the user object, not the username string
  // Added 'error' to the destructuring
  const {
    username,
    status,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = status === "loading";
  const totalPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl mb-8 font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="customer">
            First name
          </label>
          <div className="grow">
            <input
              type="text"
              name="customer"
              id="customer"
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
            <input
              type="tel"
              name="phone"
              id="phone"
              className="input"
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40" htmlFor="address">
            Address
          </label>
          <div className="grow">
            <input
              type="text"
              name="address"
              id="address"
              className="input"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {/* ERROR DISPLAY AREA */}
            {status === "error" && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>

          {!position?.latitude && !position?.longitude && (
            <span className="absolute right-0.75 top-0.75 z-50 md:right-1.25 md:top-1.25">
              <Button
                type="small"
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="flex items-center gap-5 mb-12">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          {/* Sending geolocation coordinates to the action */}
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />

          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting ? "Placing order..." : `Order now for ${totalPrice}$`}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
