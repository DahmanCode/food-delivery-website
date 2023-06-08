'use client'
import React, {useContext} from "react";
// components
import CartItem from "./CartItem";
import CartBottom from "./CartBottom";
import CartTop from "./CartTop";
// context
import { CartContext } from '../context/CartContext.js'


const CartDesktop = () => {
  const { isOpen, cart } = useContext(CartContext)
  return (
    <div 
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } bg-white fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300`}
    >
      
    </div>
  );
};

export default CartDesktop;
