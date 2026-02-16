import React, { useContext } from "react";
import { LogStorage } from "../Context/Context";
import ProductCard from "./ProductCard";

const Cart = () => {
  const { products } = useContext(LogStorage);

  const cartItems = products.filter((item) => item.addedToCart);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="h-screen bg-[#050310] py-[80px] md:py-[100px]">
          <div className="w-[90%] md:w-[80%] h-full mx-auto flex flex-col gap-5 md:gap-10 ">
            <h1 className="text-white font-poppins text-3xl md:text-5xl font-medium tracking-tighter">
              Cart
            </h1>
            <div className="h-full flex flex-wrap gap-5 md:gap-10  justify-center items-center">
              <h1 className="text-gray-400 font-poppins text-2xl font-medium tracking-tighter">
                Cart is empty
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-fit min-h-screen bg-[#050310] py-[80px] md:py-[100px]">
          <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-5 md:gap-10">
            <h1 className="text-white font-poppins text-3xl md:text-5xl font-medium tracking-tighter">
              Cart
            </h1>
            <div className="flex flex-wrap gap-5 md:gap-10 justify-start">
              {cartItems.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
            </div>
            <div className="w-fit flex items-center justify-between text-5xl text-white font-bold gap-2">
              <h1>Total -</h1>
              <p>
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
