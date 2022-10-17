import React, {useState} from 'react';
import ItemList from './ItemList';
import './ItemContainer.css'

import imgQuartz from '../imgs/Icon_Quartz.png';
import imgCarbon from'../imgs/Icon_Carbon.png';
import imgSteel from'../imgs/Icon_Steel.png';
import imgSphalerite from'../imgs/Icon_Sphalerite.png';
import imgTitanium from'../imgs/Icon_Titanium_Alloy.png';
import imgAluminium from'../imgs/Icon_Aluminum.png';
import { useEffect } from 'react';



function getProducts(){
    const myPromise = new Promise( (resolve,reject) => {
        const itemList = [
            {id:1, tittle:'Quartz', price:20,img: imgQuartz,stock:20},
            {id:2, tittle:'Carbon', price:75,img: imgCarbon,stock:25},
            {id:3, tittle:'Steel', price:150,img: imgSteel,stock:15},
            {id:4, tittle:'Sphalerite', price:125,img: imgSphalerite,stock:5},
            {id:5, tittle:'Titanium', price:200,img: imgTitanium,stock:10},
            {id:6, tittle:'Aluminium', price:100,img: imgAluminium, stock:15}
        ];
        setTimeout( ()=>{
            resolve(itemList);
        }, 3000);
    });
    return myPromise;
};



function ItemContainer({children}) {

    const [products,setProducts] = useState([]);

    useEffect( ()=>{
        getProducts()
            .then(res =>{
                setProducts(res);
            })
    } ,[]);

    return (
        <div className='itemContainer'> 
            <ItemList itemList={products}/>
            {children}
        </div>
    );
}

export default ItemContainer;