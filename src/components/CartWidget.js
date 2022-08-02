import React from "react";
import { Link } from "react-router-dom";

export const CartWigget = () => {
    return (
        <>
        <Link to='./cart'>
        <img src="/Carrito.png" alt="Carrito"/>
        </Link>
        </>
    )
}

export default CartWigget;
