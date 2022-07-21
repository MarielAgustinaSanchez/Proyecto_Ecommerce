import React from "react";
import { Link } from "react-router-dom";

const styles = {
    container: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent : 'center',
    },

    Items: {
        backgroundColor: '#fff',
        color: '000',
        width:'200px',
        display: 'flex',
        flexDirection: 'column', 
        alingItems: 'center',
        fontSize: '1.2 rem', 
        margin: '10px',
    },
    Image:{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '15 px 15px 0 0',
    },
}

export const Item = ({item}) => {
    return(
        <div style={styles.container}>
          <div style={styles.Items}>
             <img style={styles.Image} src={item.img} />
            <div>
              <h3>{item.title}</h3>
              <span>{item.description} </span>
             <Link to={`/Item/${item.id}`}> <button>DETALLE</button></Link>
           </div>
          </div>
        </div> 
    )
}

export default Item;

