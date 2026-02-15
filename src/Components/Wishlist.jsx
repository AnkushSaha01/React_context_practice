import React from "react";
import { useContext } from "react";
import { LogStorage } from "../Context/Context";
import ProductCard from "./ProductCard";

const Wishlist = () => {
  const { products } = useContext(LogStorage);

  const wishItems = products.filter((item) => item.wishListed);

  return (
    <div>
      {wishItems.length === 0 ? (<div className="h-screen bg-[#050310] py-[100px]">
      <div className="w-[80%] h-full mx-auto flex flex-col gap-10 ">
        <h1 className="text-white font-poppins text-5xl font-medium tracking-tighter">
          Wishlist
        </h1>
        <div className="h-full flex flex-wrap gap-10  justify-center items-center">
          <h1 className="text-gray-400 font-poppins text-2xl font-medium tracking-tighter">
            Wishlist is empty
          </h1>
        </div>
      </div>
    </div>):(<div className="h-screen bg-[#050310] py-[100px]">
      <div className="w-[80%] mx-auto flex flex-col gap-10">
        <h1 className="text-white font-poppins text-5xl font-medium tracking-tighter">
          Wishlist
        </h1>
        <div className="flex flex-wrap gap-10">
          {wishItems.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </div>)}
    </div>
  );
};

export default Wishlist;
