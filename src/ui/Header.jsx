import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

const Header = () => {
  const username = useSelector((state) => state.user.username);
  return (
    <header className="flex items-center justify-between bg-yellow-400 uppercase sm:px-6 border-b border-stone-200 px-4 py-3">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <p className="hidden text-sm font-semibold md:block">
        {username !== "" ? username : null}
      </p>
    </header>
  );
};

export default Header;
