import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail.jsx/ItemDetail'
import { Loader } from '../Loader/Loader'
import { collection, doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../Firebase/config'


export const ItemDetailContainer = () => {
 const [item, setItem] = useState()
 const [loading, setLoading] = useState(false)
 const {itemId} = useParams()

//  console.log(itemId)

 useEffect(()=>{
    setLoading(true)
    const productosRef = collection(db, 'productos')
    const docRef = doc(productosRef, itemId) 
    getDoc(docRef)
      .then((doc) => {
          setItem({
            id: doc.id,
            ...doc.data()
          })
      })
      .finally(()=>{
        setLoading(false)
      })

 }, [itemId])

  return ( 
      <div className='container my-5'>
        {
          loading
          ? <Loader />
          : <ItemDetail {...item}/>
        }
      </div>
  )
}

// import { pedirDatos } from '../../Helpers/pedirDatos'

   // pedirDatos()
    // .then( response=> {
    //   setItem(response.find(prod => prod.id === Number(itemId)))
    // })
    // .finally(()=>{
    //   setLoading(false)
    // })