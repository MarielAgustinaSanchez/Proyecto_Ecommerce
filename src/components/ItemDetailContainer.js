import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from "./ItemDetail"
import {productos} from "./mock/productos"

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();

 /* const traerItemPorId = () => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(productos.find(obj => obj.id == id));
      }, 1000)
    });
  };
 
   useEffect(()=>{
    traerItemPorId().then((respuesta)=>{
      setItem(respuesta)
    });
  },[]);
*/

useEffect (() => {
  const querydb = getFirestore();
  const queryDoc = doc(querydb, 'products','p1ZYMyYktGV9gwKISayR p1ZYMyYktGV9gwKISayR')
  getDoc(queryDoc)
  .then(res => setItem({id: res.id, ...res.item() }))
}, [])

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer;