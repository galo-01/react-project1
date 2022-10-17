import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemContainer from './components/ItemContainer/ItemContainer';
import ItemDetailContainer from './components/ItemContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App"> 
      <NavBar>
        <CartWidget/>
      </NavBar>

      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header> 
    
      {/* <ItemContainer/> */}
      

      <ItemDetailContainer/>

    </div>
  );
}

export default App;
