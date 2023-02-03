import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillShopping,
} from "react-icons/ai";

const Navbar = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const toggleSideNav = () => {
    if (ref.current?.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current?.classList.contains("translate-x-full")) {
      ref.current?.classList.remove("translate-x-0");
      ref.current?.classList.add("translate-x-full");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center my-3 shadow-md">
      <div className="logo mx-3">
        <Link href={"/"}>
          <Image width={200} height={40} src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>

      <div
        onClick={toggleSideNav}
        className="cart absolute right-0 top-4 cursor-pointer"
      >
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>
      <div
        ref={ref}
        className="absolute top-0 right-0 bg-pink-200 p-8 transform transition-transform translate-x-full w-72 h-full z-30"
      >
        <h3 className="text-xl font-bold text-center">Shopping Cart</h3>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3">TShirt-Wear the code</div>
              <div className="w-1/3 flex justify-center items-center">
                <AiFillPlusCircle className="mx-2 cursor-pointer text-5xl text-pink-600" />
                1
                <AiFillMinusCircle className="mx-2 cursor-pointer text-5xl text-pink-600" />
              </div>
            </div>
          </li>
          <div
            onClick={toggleSideNav}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <AiFillCloseCircle className="text-pink-600" />
          </div>
        </ol>
        <div className="flex">
          <button className="text-white bg-pink-500 border-0 mr-2 p-2 focus:outline-none hover:bg-pink-600 rounded text-sm flex items-center">
            <AiFillShopping className="m-1" />
            Checkout
          </button>
          <button className="text-white bg-pink-500 border-0 mr-2 p-2 focus:outline-none hover:bg-pink-600 rounded text-sm flex">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
