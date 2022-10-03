import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div>
            <button className='boton'>{props.texto ? props.texto : "[default]"}</button>

        </div>
    );
}

export default Button;  