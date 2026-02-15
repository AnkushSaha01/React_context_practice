import React from "react";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { LogStorage } from "../Context/Context";

const ProductSection = () => {
  const { products } = useContext(LogStorage);
  return (
    <div className="bg-[#050310] w-full  flex  justify-center py-[100px]">
      <div className="w-[90%] flex justify-evenly gap-[100px] flex-wrap">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
