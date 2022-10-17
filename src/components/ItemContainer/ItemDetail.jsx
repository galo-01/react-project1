import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail({item}) {
    return (
        <div className='card'>
            <div className='card-left'>
                <img className='left-img' src={item.img} alt={item.tittle} />
                <p className='left-price' >${item.price}</p>
                <ItemCount className='left-counter' stock={item.stock} initial={1}   />
            </div>
            <div className='card-right'>
                <h2 className='right-tittle' >{item.tittle}</h2>
                <h5 className='right-detail' >{item.detail}</h5>
            </div>
        </div>
    );
}

export default ItemDetail;