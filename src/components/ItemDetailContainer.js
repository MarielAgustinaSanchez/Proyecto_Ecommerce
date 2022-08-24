import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", id);
    getDoc(queryDoc).then(res => 
      setData({ id: res.id, ...res.data() })
      ); setLoading(false);
  }, [id]);

  return (
    <div className="ItemDetailContainer">
    {loading ? <Loader /> : <ItemDetail item={data} />}
    </div>
  );
};

export default ItemDetailContainer;