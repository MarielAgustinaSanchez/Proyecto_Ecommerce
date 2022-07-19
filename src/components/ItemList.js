import React from "react";
import Item from "./Item";

const styles ={
    container: {
     display: 'flex',
     flexDirection: 'row',
     flexWrap:'wrap',
     justifyContent: 'center'
    }
}

export const ItemList = ({items}) => {
    console.log(items);
    return (
        <>
        <div style={styles.container}>
        {items.map ((item)=>(
           <Item item={item} key={item.id} />
        ))}
        </div>
        </>
    );
};

export default ItemList;