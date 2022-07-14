import React from "react";

export const Item = ({item}) => {
    return(
        <div>
            <img src={item.img} />
           <div>
              <h3>{item.title}</h3>
              <span>{item.description} </span>
           </div>
        </div>
    )
}

export default Item