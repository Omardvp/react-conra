// import React, { useEffect, useState } from 'react'
// import { ItemListDos } from '../../Ejemplos/ItemListDos/ItemListDos'
// import { llamarDB } from '../../Ejemplos/llamarDB'




// export const ItemListContainerDos = () => {
//   const [loading, setLoading] = useState(false)
//   const [prods, setProds] = useState([])  
//     console.log(prods)

//   useEffect(()=>{
//     setLoading(true)
//     llamarDB()
//     .then((response) =>{
//       setProds(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//     .finally(()=> {
//         setLoading(false)
//     })
//   },[])

//     return (
//     <>
//         <h2>Promesas</h2>

//         {
//             loading ? <h2>Cargando...</h2> : 
//             <>
//                <ItemListDos productos={prods}/>
//             </>
//         }
        
//     </>
//   )
// }
