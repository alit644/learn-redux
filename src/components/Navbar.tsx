import { NavLink } from "react-router";
import Button from "./UI/Button";
import { useAppSelector } from "../App/store";
import  { memo } from "react";

const Navbar = () => {
const cartItems =  useAppSelector((state) => state.cart.cartItems.length);
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <NavLink to="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-700">MyShop</span>
      </NavLink>
      {/* Actions */}
      <div className="flex items-center space-x-6">
        {/* Cart */}
        <NavLink to={"/cart"} className="relative flex items-center text-gray-700 hover:text-blue-700 transition">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">{cartItems}</span>
        </NavLink>
        {/* Login */}
        <Button content="Login" type="button" className="bg-blue-700 hover:bg-blue-400 text-white"/>
        
      </div>
    </nav>
  );
};
export default memo(Navbar);