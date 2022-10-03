import React from 'react';

function ItemContainer({children}) {
    return (
        <div>
            <h4>start</h4>
            {children}
            <h4>finish</h4>
        </div>
    );
}

export default ItemContainer;