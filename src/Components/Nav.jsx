import React, { useContext } from "react";
import { LogStorage } from "../Context/Context";

const Nav = ({ setView }) => {
  const { products } = useContext(LogStorage);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-[100px] py-5 md:py-10 w-full mx-auto md:bg-[#050310]/50 bg-[#050310]/60 backdrop-blur-sm`}
    >
      <h2 className="text-xl md:text-2xl font-bold text-white">NxtGn</h2>
      <div className="flex items-center gap-4 md:gap-10 text-white">
        <h4
          onClick={() => setView("home")}
          className="font-normal text-xs md:text-sm border-b-2 border-transparent hover:border-white opacity-70 hover:opacity-100 duration-300 cursor-pointer"
        >
          Home
        </h4>
        <div className="flex items-center gap-2  ">
          <h4
            onClick={() => setView("cart")}
            className="font-normal text-xs md:text-sm border-b-2 border-transparent hover:border-white opacity-70 hover:opacity-100 duration-300 cursor-pointer"
          >
            Cart
          </h4>
          <span className="font-normal text-xs md:text-sm border-b-2 border-transparent hover:border-white opacity-70 hover:opacity-100 duration-300 cursor-pointer">
            {products.filter((item) => item.addedToCart).length}
          </span>
        </div>
        <div className="flex items-center gap-2  ">
          <h4
            onClick={() => setView("wishlist")}
            className="font-normal text-xs md:text-sm border-b-2 border-transparent hover:border-white opacity-70 hover:opacity-100 duration-300 cursor-pointer"
          >
            Wishlist
          </h4>
          <span className="font-normal text-xs md:text-sm border-b-2 border-transparent hover:border-white opacity-70 hover:opacity-100 duration-300 cursor-pointer">
            {products.filter((item) => item.wishListed).length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
