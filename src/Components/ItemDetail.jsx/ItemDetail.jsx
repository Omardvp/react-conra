import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'

export const ItemDetail = ({name, img, desc, price, category, stock, id}) => {
  const {agregarAlCarrito, isInCart} = useContext(CartContext)
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState(0)
  // const [agregado, setAgregado] = useState(false)

  
  const handleVolver = () => {
    navigate(-1)
  }

  const handleInicio = () => {
    navigate('/')
  }

  const handleAgregar = () => {
    if(cantidad > 0) {
      agregarAlCarrito({
        id,
        name,
        price,
        desc,
        cantidad
      })
     
      // setAgregado(true)
    }
   
  }
 
  return (
    <article className='card m-3' style={{ width: '18rem' }}>
        <img src={img} alt={name}/>
          <div className='card-body'>
            <h2 className='card-text'>{name}</h2>
            <p className='card-text'>{desc}</p>
            <p className='card-text'>Precio: {price}</p>
            <p className='card-text'>{category}</p> 
            {
              !isInCart(id) 
              ?
              <ItemCount 
                  max={stock} 
                  cantidad={cantidad} 
                  setCantidad={setCantidad}
                  onAdd={handleAgregar}/>
                  : <Link to={'/cart'} className='btn btn-success'>Ir al carrito</Link>          
            }         
          </div>
          <div className='my-3' style={{ width: '18rem' }}>
            <button className='btn btn-primary' onClick={handleVolver}>Volver</button>
            <button className='btn btn-outline-primary' onClick={handleInicio}>Volver al inicio</button> 
          </div>
    </article>
  )
}
