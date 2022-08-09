import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
 
const Provider = (props) =>{
  
    const [cart, setCart] = useState([]);
    const [suma, setSuma] = useState(0)

    const totalCart = () => {
        let  suma = 0
        cart.forEach(item => (suma += item.price * item.cantidad));
        setSuma(suma);
    };


    useEffect(() => {
        console.log(cart);
        totalCart();
    }, [cart] );
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert("ya esta en el carrito");
          } else {
            setCart([...cart, { ...item, cantidad }]);
          }
        };
     
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const totalPrecio = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
      };
    
      const totalProductos = () =>
        cart.reduce(
          (acumulador, productoActual) => acumulador + productoActual.cantidad,
          0
        );

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);

    };

   
    const deleteAll = () => {
        setCart([]);
    };
   
    // Obtener número total de items
    const cartLenght = () => {
        let cantidad = 0
        cart.forEach((item) => {
            cantidad = cantidad + item.cantidad
        })
        return cantidad
    }

    return (
    <cartContext.Provider value={{cart, addToCart, deleteOne, deleteAll, suma, totalPrecio, totalProductos, cartLenght}}>
      {props.children}
    </cartContext.Provider>    
    );
};

export default Provider;