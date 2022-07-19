import './App.css';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';

function App() {
  return (
  <>
  <div className='App'>
    <div className="Container">
      <NavBar/>
      <ItemListContainer greeting = "Productos" />
      <ItemDetailContainer/>
      </div>
   </div>
    </>
    )
};

export default App;
