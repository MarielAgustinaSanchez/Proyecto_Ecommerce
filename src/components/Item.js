import React from "react";
import { Link } from "react-router-dom";

const styles = {
    container: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent : 'center',
     paddingTop: '20px',

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

    box: {
        display: 'flex',
        flexDirection: 'column',
    },

    title:{
        display:'flex',
        justifyContent: 'center',
    },

    Button:{
        backgroundColor: 'Black',
        color:'white',
        margin: '10px',
    },

    link:{
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',  
    }
}

export const Item = ({item}) => {
    return(
        <div style={styles.container}>
          <div style={styles.Items}>
             <img style={styles.Image} src={item.img}/>
            <div style={styles.box} >
              <h3 style={styles.title}>{item.title}</h3>
             <Link to={`/Item/${item.id}`} style={styles.link}> <button style={styles.Button}>DETALLE</button></Link>
           </div>
          </div>
        </div> 
    )
}

export default Item;

