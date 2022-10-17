import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';

import imgSphalerite from'../imgs/Icon_Sphalerite.png';


function getItem(){
    const myPromise = new Promise( (resolve,reject)=>{
        const item = {
            id:4, tittle:'Sphalerite', price:125,img: imgSphalerite,stock:5, detail: "Sphalerite is a sulfide mineral, and it is the most important ore of zinc. Sphalerite is found in a sedimentary exhalative and volcanogenic massive sulfide deposits. It is used to craft Zinc and others zinc varients like Aluminium."
        }
        setTimeout(()=>{
            resolve(item);
        },2000)
    })
    return myPromise;
}


function ItemDetailContainer(props) {

    const [item,setItem] = useState({});

    useEffect(()=>{
        getItem()
            .then((response)=>{
                setItem(response);
            })
    },[]);
    


    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;






        