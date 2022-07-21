import "./ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
  const {title, price, imgDetalle, stock, description, extra} = item
  const onAdd = (cantidad) => {
    console.log("seleccionaste ", cantidad, " items")
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
        <ItemCount stock={stock} precio={price} onAdd={onAdd}/>
      </div>
    </div>
    </>
  );
};

export default ItemDetail;