import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {productos} from "./mock/productos"

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  console.log(useState())
  const {id} = useParams();

  const traerItemPorId = () => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(productos.find(obj => obj.id === id));
      }, 1000)
    });
  };

  useEffect(()=>{
    traerItemPorId().then((respuesta)=>{
      setItem(respuesta)
    });
  },[]);


  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer;