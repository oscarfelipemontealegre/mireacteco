import NavBar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ItemDetailCointainer from './Components/ItemDetailCointainer/ItemDetailCointainer';

function App() {

  return(
    
      <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/'element={<ItemListContainer/>}/>
              <Route path= '/categorias/:categoriasId' element={<ItemListContainer/>}/>
              <Route path='/item/:id'  element={<ItemDetailCointainer/>}/>
            </Routes>
            
          
      </BrowserRouter>
    
  );
  


}

export default App;
