import React, { useEffect, useState } from "react";
import {productos} from "./mock/productos"
import {ItemList} from "./ItemList";

const styles = {
  title: {
    display:'flex',
    justifyContent: 'center',
  }

}
export function ItemListContainer (props) {
   const [items, setItems] = useState([])
   useEffect(() =>{
     const traerProductos = new Promise ((res, rej) => {
       setTimeout (() =>{
        res(productos);
       }, 2000)
     });
     traerProductos.then ((data) =>{
         setItems (data);
     });
   }, []);
    
   return(
    <div>
      <h1 style={styles.title}> {props.greeting} </h1> 
      <ItemList items={items}/>
    </div>
   )
}

export default ItemListContainer;