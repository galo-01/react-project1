import React from 'react';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


function Item({item}) {

    return (
        <div className='item'>
            <h4 className='card-tittle'>{item.tittle}</h4>
            <div className='card-img'>
                <Link to={`/item/${item.tittle}`} ><img src={item.img} alt='item_img' className='card-img-img'/></Link>
            </div>
            <div className='card-content'>${item.price}</div>  
            <ItemCount className='card-counter' stock={item.stock} initial={1}/>  
        </div>
    );
}

export default Item;