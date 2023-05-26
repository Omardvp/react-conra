//Hooks -- useState -- useEffect // 

import React, {useState, useEffect} from 'react'

export const Clicker = () => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }

//useEfect(funcion()=>{
// },dependencia [])

  // useEffect(()=>{
  //   console.log('Clicker montado')
  //   return()=>{
  //     console.log('Clicker desmontado')} 
      
  // },[])

  // useEffect(()=>{
  //   console.log('Clicker actualizado')  
  //     },[clicks]
  // )

  // useEffect(()=>{
  //   return ()=>{
  //     console.log('clicker desmontado')
  //   }
  // },[])

    return (
    <div onClick={handleClick}>
        <h2>Clicks: {clicks} </h2> 
        <p>FyH: {new Date().toLocaleString()}</p>

    </div>
  )
}


