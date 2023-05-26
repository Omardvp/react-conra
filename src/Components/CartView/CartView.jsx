import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import {Link} from 'react-router-dom'

export const CartView = () => {
  const {carrito, vaciarCarrito, totalCompra} = useContext(CartContext)
  
  return (
    <div className='container my-5'>
        
        {
          carrito.length > 0 
          ? <>
                <h2>CartView</h2>
                <hr/>
                <section>          
                        {
                          carrito.map((prod) =><CartItem key={prod.id} {...prod}/>)
                        }          
                </section>
                <hr/>
                      <div>
                        <p>Total: ${totalCompra()}</p>
                        <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar carrito</button>
                        <Link to='/checkout' className='btn btn-success mx-2'>Terminar mi compra</Link>
                      </div>
            </>
            : <>
                <h2>Aun no tienes productos en tu carrito</h2>
                <hr/>
                <Link to='/' className='btn btn-primary'>Ir a comprar</Link>
              </>

        }
    
    </div>
  )
}
