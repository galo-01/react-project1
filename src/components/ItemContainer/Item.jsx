import React from 'react';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';

function Item({item}) {

    return (
        <div className='item'>
            <h4 className='card-tittle'>{item.tittle}</h4>
            <div className='card-img'>
                <img src={item.img} alt='item_img' className='card-img-img'/>
            </div>
            <div className='card-content'>${item.price}</div>  
            <ItemCount className='card-counter' stock={item.stock} initial={1}/>  
        </div>
    );
}

export default Item;