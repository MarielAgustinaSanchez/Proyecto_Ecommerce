import React, { useEffect, useState } from "react";
import {productos} from "./mock/productos"
import {ItemList} from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";


export const ItemListContainer = () => {
   const [items, setItems] = useState([])
   const [cargando, setCargando] = useState (true)
   const {categoria} = useParams()

   
   const traerItems = () => {
      return new Promise((resolve)=>{
         setCargando(true)
         setTimeout(()=>{
         resolve(categoria ? productos.filter(obj => obj.categoria === categoria) : productos)
        }, 500)
      }) 
    }
  
    useEffect(()=>{
      traerItems().then(res =>{
        setItems(res)
        setCargando(false)
      });
    },[categoria])


    
   return(
      <>
      {cargando ? <Loader/> : <ItemList items={items}/>}
      </>
   )
}
