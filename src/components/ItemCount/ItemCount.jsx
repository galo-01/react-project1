import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({stock,initial,onAdd}) {

    const [amount,setAmount] = useState(initial);

    const decrementAmount = ()=>{
        if (amount > 1){
            setAmount(amount-1)
        }    
    };
    const incrementAmount = ()=>{
        if (amount < stock){
            setAmount(amount+1)
        }
    };

    console.log("------------------")
    console.log(stock)
    console.log(initial)

    return (
        <div className='counter'>
            <button onClick={decrementAmount} className='count-minus button'>-</button>
            <span className='count-spam'>{amount}</span>
            <button onClick={incrementAmount} className='count-plus button'>+</button>

            <button onClick={onAdd} className='counter-button button'>Add to cart</button>
        </div>
    );
}

export default ItemCount;