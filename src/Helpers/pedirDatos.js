import { stock } from "../Stock/stock"

export const pedirDatos = () => {
    return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      resolve(stock)
    }, 1500)
    })
  }