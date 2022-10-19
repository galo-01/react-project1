import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Detalle from './pages/Detalle';


function App() {
  return (
    <div className="App"> 
      <NavBar>
        <CartWidget/> 
      </NavBar>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/category/:id" element={<Catalogo/>} />
        <Route exact path="/store" element={<Catalogo/>} />
        <Route exact path="/item/:id" element={<Detalle/>} />
      </Routes>
    </div>
  );
} 

export default App;
