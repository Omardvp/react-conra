import React from 'react'

export const ItemCount = ({max, cantidad, setCantidad, onAdd}) => {
  // const [cantidad, setCantidad] = useState(0)
  
const handleRestar = () => {
    cantidad > 0 && setCantidad(cantidad - 1) 
}

const handleSumar = () => {

    cantidad < max && setCantidad(cantidad + 1) 
    
}
    return (
    <div className='my-3'>
        <button onClick={handleRestar} className='btn btn-outline-primary'>-</button>
        <span className='mx-2'>{cantidad}</span>
        <button onClick={handleSumar} className='btn btn-outline-primary'>+</button>
        <br/>
        <button className='btn btn-outline-success my-2' onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

// const handleSumar = ()=> {
//    if(cantidad < stock){
//      setCantidad(cantidad + 1)
//    } 
//    Reduccion en sugar sintax:
//     cantidad < stock && setCantidad(cantidad + 1) 
    
// }


// const handleSumar = ()=> {
//    if(cantidad < stock){
//      setCantidad(cantidad + 1)
//    } 
//    Reduccion en sugar sintax:
//     cantidad < stock && setCantidad(cantidad + 1) 
    
// }