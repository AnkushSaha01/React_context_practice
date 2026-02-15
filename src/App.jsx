import React, { useContext, useState } from "react";
import FooterGraphic from "./assets/FooterGraphic.jpg";
import Nav from "./Components/Nav";
import ProductSection from "./Components/Products";
import Cart from "./Components/Cart";
import Products from "./DB/Data";
import { LogStorage } from "./Context/Context";
import Wishlist from "./Components/Wishlist";

const App = () => {
  const [view, setView] = useState("home");
  return (
    <div className="relative">
      <Nav setView={setView} />
      <div
        className="h-[65vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${FooterGraphic})` }}
      >
        <h1 className="text-3xl w-full text-center md:text-5xl font-poppins font-normal tracking-tighter text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  ">
          Browse throgh the next gen products!
        </h1>
      </div>
      {view === "home" && <ProductSection />}
      {view === "cart" && <Cart />}
      {view === "wishlist" && <Wishlist />}
    </div>
  );
};

export default App;
