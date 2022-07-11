import './App.css';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';

function App() {
  return <>
  <div className='App'>
    <div className="Container">
     <NavBar/>
      <ItemListContainer greeting= "Bienvenidxs"/>
      </div>
   </div>
    </>
};

export default App;
