import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
 
const Provider = (props) =>{
  
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        console.log(cart);
    }, [cart] );
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
    };
     
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    return (
    <cartContext.Provider value={{cart, addToCart}}>
      {props.children}
    </cartContext.Provider>    
    );
};

export default Provider;