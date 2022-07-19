import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, precio, onAdd }) => {
  const [count, setCount] = useState(initial);

  const suma = () => {
    if (count < stock) setCount(count + 1);
  };

  const resta = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <>
    <div className="counter">
      <button onClick={resta} className="boton-counter">
        -
      </button>
      <h4 className="Count">
        {count}
      </h4>
      <button onClick={suma} className="boton-counter">
        +
      </button>
    </div>
    <span style={{color:"whitesmoke", fontSize:"1.2em"}}><b>Total: ${count * precio}</b></span>
    <button className="agregar" onClick={()=>onAdd(count)}>AGREGAR AL CARRITO</button>
    </>
  );
};

export default ItemCount;