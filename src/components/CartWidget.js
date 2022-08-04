import React from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { useContext } from "react";

export const CartWigget = () => {
    const { cart } = useContext(cartContext);
    return (
        <div>
            <Link to='./cart'>
            <img src="/Carrito.png" alt="Carrito"/>
            </Link>
            <p>{cart.length}</p>
        </div>
    );
};

export default CartWigget;
