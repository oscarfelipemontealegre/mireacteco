import NavBar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ItemDetailCointainer from './Components/ItemDetailCointainer/ItemDetailCointainer';
import Cart from './Components/Cart/Cart';
import React from 'react';
import CartProvider from './Context/CartContext';


function App() {

  return(
    
      <BrowserRouter>
          
            <CartProvider>
              <NavBar/>
                <Routes>
                  <Route path='/'element={<ItemListContainer/>}/>
                  <Route path= '/categorias/:categoriasId' element={<ItemListContainer/>}/>
                  <Route path='item/:id'  element={<ItemDetailCointainer/>}/>
                  <Route path='/Cart'element={<Cart/>}/>

                </Routes>
            </CartProvider>
          
      </BrowserRouter>
    
  );
  


}

export default App;
