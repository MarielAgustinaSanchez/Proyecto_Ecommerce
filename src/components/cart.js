import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../src/context/CartContext'

const styles = {
  productos: {
    display: 'flex',
    justifyContent: 'center',
    margin: '16px',
  },
  Link:{
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '16px',
  }, 
}
const Cart = () => {

const {cart, deleteAll, deleteOne, suma} = useContext(cartContext)



    if (cart.length === 0) {
        return (
            <h3 style={styles.productos}>
                No hay productos seleccionados, volver al <Link style={styles.Link} to="/">Catálogo</Link>
            </h3>
        )
    }

  return (
    <div> 
            <div className='text-center'>
              <h2>Productos Seleccionados</h2>
            </div>
            {cart.map((prod) => (
                <div key={prod.id} className="m-5 d-flex row text-center" >
                  <div className='col-2'>
                        <img src={prod.img} width="120px" height="120px" alt={prod.title} />
                  </div>
                    <div className='col-3'>
                        <h4>{prod.title}</h4>
                    </div> 
                    <div className='col-3'>
                        <h4>Cantidad: {prod.cantidad}</h4>
                    </div>
                    <div className='col-2'>
                        <h4>Precio $ {prod.price}</h4>
                    </div>
                    <div className='col-2'>
                        <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <div className='d-flex row m-5 justify-content-between'>
              <div className='col-3'>
            <button onClick={deleteAll}>Eliminar todos los productos</button>
              </div>
            <div className='col-3'>
              <h3>Total: $ {suma}</h3>
             <Link to="/checkout"><button >Confirmar compra </button></Link>
              </div>
            </div>
        </div>
  )
}

export default Cart