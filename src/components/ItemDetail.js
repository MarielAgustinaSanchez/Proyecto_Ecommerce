import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
  const {title, price, imgDetalle, stock, description, extra} = item
  const [cantidad, setCantidad] = useState (0)
  const onAdd = (cantidad) => {
  setCantidad(cantidad)
  };

  return (
    <>
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={imgDetalle} alt={title} className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>{title}</h1>
            {extra && <span>{extra}</span>}
            <h3 style={{color: "black"}}>${price}</h3>
        </div>
        <p>
          {description}
        </p>
        { cantidad === 0 ? (
        <ItemCount stock={stock} precio={price} onAdd={onAdd}/>
         ) : (
          <Link to="./cart"> <button>Terminar mi compra</button></Link>
          )}
      </div>
    </div>
    </>
  );
};

export default ItemDetail;