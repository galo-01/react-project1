import React from 'react';
import logo from './logo.svg';
import './App.css';

function ReactLogo(props) {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Page made with React.js</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header> 
    
    );
}

export default ReactLogo;