import React, { useEffect, useState } from "react";
//import {productos} from "./mock/productos"
import {ItemList} from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { getFirestore,
collection,
getDocs,
query,
where
 } from "firebase/firestore";

 export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
    if (categoria) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoria)
      );

      getDocs(queryFilter).then(res =>
        setData(res.docs.map(items => ({ id: items.id, ...items.data() })))
      );
    } else {
      getDocs(queryCollection).then(res =>
        setData(res.docs.map(items=> ({ id: items.id, ...items.data() })))
      );
    }
  }, [categoria]);


   return(
      <div>
        <div className="cards">
          <ItemList items={data} />
        </div>
  
    </div>
  );
};

export default ItemListContainer;