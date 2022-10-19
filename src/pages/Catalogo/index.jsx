import React from 'react';
import ItemContainer from '../../components/ItemContainer/ItemContainer.jsx';
import '../../App.css'

function Catalogo(props) {
    return (
        <div>
            <h1 className='page-tittle'>Catalogo</h1>
            <ItemContainer/>
        </div>
    );  
}

export default Catalogo; 