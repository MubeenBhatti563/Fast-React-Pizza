import React from "react";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;
