import Button from "react-bootstrap/esm/Button";
import React, {useState} from "react";
 
function ItemCount () {
    let min = 0;
    let max = 11;


const [stock, setStock] = useState (1);

function sumar () {
    const producto = stock + 1;
    if (producto < max) {
        setStock (producto)
    }
}

function restar (){
    const producto = stock - 1;
    if (producto > min){
        setStock(producto);
    }
}

function onAdd (){
    alert ("Se agrego al carrito")
}

return (
    <>
    <div> 
    <Button className="btn-dark" onClick={restar}>
    -
    </Button>
    <span> {stock}</span>
    <Button className="btn-dark" onClick = {sumar}>
     +
    </Button> <br></br>
    <Button className="btn-dark" onClick={onAdd}> Agregar producto </Button>
    </div>
    </>
);

}

export default ItemCount;