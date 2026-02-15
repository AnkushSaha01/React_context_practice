import React, { useContext } from "react";
import { LogStorage } from "../Context/Context";
import ProductCard from "./ProductCard";

const Cart = () => {
  const { products } = useContext(LogStorage);

  const cartItems = products.filter((item) => item.addedToCart);

  return (
    <div>
      {cartItems.length === 0 ? (<div className="h-screen bg-[#050310] py-[100px]">
      <div className="w-[80%] h-full mx-auto flex flex-col gap-10 ">
        <h1 className="text-white font-poppins text-5xl font-medium tracking-tighter">
          Cart
        </h1>
        <div className="h-full flex flex-wrap gap-10  justify-center items-center">
          <h1 className="text-gray-400 font-poppins text-2xl font-medium tracking-tighter">
            Cart is empty
          </h1>
        </div>
      </div>
    </div>
    ):(<div className="h-screen bg-[#050310] py-[100px]">
      <div className="w-[80%] mx-auto flex flex-col gap-10">
        <h1 className="text-white font-poppins text-5xl font-medium tracking-tighter">
          Cart
        </h1>
        <div className="flex flex-wrap gap-10">
          {cartItems.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </div>)}
    </div>
  );
};

export default Cart;
