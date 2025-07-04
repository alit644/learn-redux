import React from "react";
import Button from "./UI/Button";
import type { IProduct } from "../interfaces";

type CartProps = {
  items: IProduct[];
};

const Cart: React.FC<CartProps> = ({ items }: CartProps) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="flex items-center py-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <div className="font-semibold">{item.title}</div>
                <div className="text-gray-500 text-sm">${item.price}</div>
                <div className="flex items-center mt-2">
                  <Button
                    content="-"
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  />

                  <span className="mx-3">{item.quantity}</span>
                  <Button
                    content="+"
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  />
                </div>
              </div>
              <Button
                content="&times;"
                className="ml-4 text-red-500  bg-red-200"
              />
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex justify-between items-center">
        <span className="font-bold text-lg">Total:</span>
        <span className="text-blue-700 font-bold text-lg">${2093}</span>
      </div>
    </div>
  );
};

export default Cart;
