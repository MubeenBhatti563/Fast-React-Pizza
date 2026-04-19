import { redirect } from "react-router-dom";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw new Error("Failed getting menu");
  const { data } = await res.json();

  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) throw new Error(`Couldn't find order #${id}`);
  const { data } = await res.json();

  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
