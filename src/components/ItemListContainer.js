import React from "react";
import ItemCount from "./ItemCount";

export function ItemListContainer (props) {
   return(
    <>
    <div className="Inicio">
    <h1> {props.greeting} </h1> 
    <ItemCount/>
    </div>
    </>
   )
}