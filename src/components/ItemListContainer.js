import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
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
         );} setLoading(false);
  }, [categoria]);


   return(
        <div className="cards">
        {loading ? <Loader /> : <ItemList items={data} />}
        </div>
  );
};

export default ItemListContainer;