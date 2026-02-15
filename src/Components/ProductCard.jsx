import React from "react";
import { RiHeartLine, RiHeartFill } from "@remixicon/react";
import { useContext } from "react";
import { LogStorage } from "../Context/Context";

const ProductCard = ({ product }) => {
  const { products, setProducts } = useContext(LogStorage);
  return (
    <div className="w-full sm:w-[45%] lg:w-[22%] h-fit p-4 bg-[#110d28]/80 rounded-xl flex flex-col items-start gap-6 duration-300 hover:scale-[1.02]">
      <img
        className="w-full h-[300px] md:h-[40vh] rounded-md object-cover  "
        src={product.img}
        alt=""
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-white text-2xl md:text-3xl font-poppins font-medium tracking-tighter">
          {product.name}
        </h2>
        <p className="text-[#aea5d1] text-md font-poppins leading-5 font-normal tracking-tighter">
          {product.description}
        </p>
      </div>
      <h3 className="text-white text-2xl font-poppins font-medium tracking-tight">
        $ {product.price}
      </h3>
      <div className="w-full flex items-center justify-between gap-4 ">
        {!product.addedToCart ? (
          <button
            onClick={() => {
              let updatedProducts = products.map((item) =>
                item.name === product.name
                  ? { ...item, addedToCart: !item.addedToCart }
                  : item,
              );
              localStorage.setItem("Products", JSON.stringify(updatedProducts));
              setProducts(updatedProducts);
            }}
            className="bg-transparent border-1 font-poppins font-medium tracking-tighter border-white flex-1 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black duration-300 cursor-pointer"
          >
            Add to cart
          </button>
        ) : (
          <button
            onClick={() => {
              let updatedProducts = products.map((item) =>
                item.name === product.name
                  ? { ...item, addedToCart: !item.addedToCart }
                  : item,
              );
              localStorage.setItem("Products", JSON.stringify(updatedProducts));
              setProducts(updatedProducts);
            }}
            className=" font-poppins font-medium tracking-tighter bg-red-500 flex-1 text-white px-4 py-2 rounded-full hover:bg-red-800  duration-300 cursor-pointer"
          >
            Remove from cart
          </button>
        )}
        <button
          onClick={() => {
            let updatedProducts = products.map((item) =>
              item.name === product.name
                ? { ...item, wishListed: !item.wishListed }
                : item,
            );
            localStorage.setItem("Products", JSON.stringify(updatedProducts));
            setProducts(updatedProducts);
          }}
          className="mr-4 text-[#7c5ae6] hover:text-white duration-300 cursor-pointer text-2xl"
        >
          {product.wishListed ? <RiHeartFill /> : <RiHeartLine />}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
