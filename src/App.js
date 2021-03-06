import './App.css';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './components/CartContext';

function App() {
  return (
  <Provider>
    <BrowserRouter>  
    <div className='App'>
      <div className="Container">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categorias/:categoria' element={<ItemListContainer/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter> 
  </Provider>
    )
};

export default App;
