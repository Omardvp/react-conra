import './App.css'
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from "./router/AppRouter";
import { CartProvider } from "./Components/context/CartContext";

 
 
function App() {
  
  return (
    <>
    
    <CartProvider> 

        <BrowserRouter>    
        <NavBar />               
          <AppRouter />    
        <Footer />  
        </BrowserRouter>
    
    </CartProvider>
  
     </>
  );
}

export default App;

// import { useState } from "react";
// import { ItemCount } from "./Components/ItemCount/ItemCount";
// import { ItemListContainerDos } from "./Components/ItemListContainerDos/ItemListContainerDos";
// import {Clicker} from "./Ejemplos/Clicker/Clicker"
// import { FyH } from "./Ejemplos/FyH/FyH"

  // const [mostrar, setMostrar] = useState(true)
  // const handleMostrar = () => {
  //   setMostrar(!mostrar)
  // }

    /* <button onClick={handleMostrar}>Mostrar</button>
    {mostrar && 
     {mostrar &&  <FyH />} */
  
    
    /* <ItemCount /> */
    /* <Clicker /> */
    /* <ItemListContainerDos /> */

     /* <Routes>    
     <Route path="/" element={ <ItemListContainer greeting='Aplicacion de ReactJs' title='Inicio de Portfolio'/> }/>
     <Route path="/productos/:catId" element={ <ItemListContainer /> }/>    
     <Route path="/detail/:itemId" element={ <ItemDetailContainer />}/>
     <Route path="/cart" element={ <CartView />}/>
     <Route path="*" element={ <Navigate to="/"/>}/>   
   </Routes>
  */