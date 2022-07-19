import "./ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
  const onAdd = (cantidad) => {
    console.log("seleccionaste ", cantidad, " items")
  };

  return (
    <>
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={item.imgDetalle} alt={item.title} className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>{item.title}</h1>
            <h3 style={{color: "whitesmoke"}}>${item.price}</h3>
        </div>
        <p>
          {item.description}
        </p>
        <ItemCount stock={item.stock} producto={item.price} onAdd={onAdd}/>
      </div>
    </div>
    </>
  );
};

export default ItemDetail;