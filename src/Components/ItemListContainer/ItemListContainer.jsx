import React,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
// import { pedirDatos } from '../../Helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../Firebase/config'

export const ItemListContainer = () => {
 //Arquitectura de una promesa
 const [loading, setLoading] = useState(false)
 const [productos, setProductos] = useState([])
 const { catId } = useParams()



  useEffect(()=>{
    setLoading(true)
    // 1 - Armar la referencia
    const productosRef = collection(db, 'productos')
    const q = catId ? query(productosRef, where('category','==', catId)) : productosRef;
    // 2 - Get a esa ref
    getDocs(q)
      .then((collection) => {
        const items = collection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        // console.log(items)
        setProductos(items)
      })
      .finally(()=> {
        setLoading(false)
      })

  },[catId])  
 
  return (
    <Container>      
      <hr/>
      
      {
        loading 
          ? <Loader />
          : <>
            <ItemList productos={productos}/>              
          </>
      }
    </Container>
  )
}


// pedirDatos()
    // .then((response) =>{
    //   // console.log(response)
    //   if(!catId) {
    //     setProductos(response)
    //   }else{
    //     setProductos(response.filter(prod => prod.category === catId))
    //   }
    // })
    // .catch((error) =>{
    //   console.log(error)
    // })
    // .finally(()=>{
    //   setLoading(false)
    // })

    // console.log(productos)
// console.log(catId)