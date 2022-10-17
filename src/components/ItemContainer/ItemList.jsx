import React from 'react';
import Item from './Item';
import './ItemList.css';

function ItemList(props) {

    const itemList = props.itemList

    return (
        <div className='itemList'>
            {itemList.map(item => <Item item={item} key={item.id}/>)}
        </div>
    );
}

export default ItemList;