import './App.css';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
  <>
  <div className='App'>
    <div className="Container">
     <NavBar/>
      <ItemListContainer/>
      <ItemCount/>
      </div>
   </div>
    </>
    )
};

export default App;
