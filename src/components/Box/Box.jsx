import React from 'react';
import './Box.css';

function Box({titulo,children}) {
    return (
        <div>
            <h1 className='titulo'>{titulo}</h1>
            <h4>Holo! esto es un texto repiola</h4>
            {children}
        </div>
    );
}

export default Box;