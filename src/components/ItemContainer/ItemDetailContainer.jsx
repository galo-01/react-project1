import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import imgSphalerite from'../imgs/Icon_Sphalerite.png';


function getItem(){
    const myPromise = new Promise( (resolve,reject)=>{
        const item = {
            id:4, tittle:'Sphalerite', price:125,img: imgSphalerite,stock:5, detail: "Sphalerite is a sulfide mineral, and it is the most important ore of zinc. Sphalerite is found in a sedimentary exhalative and volcanogenic massive sulfide deposits. It is used to craft Zinc and others zinc varients like Aluminium."
        }
        setTimeout(()=>{
            resolve(item);
        },500)
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
    

    const { id }= useParams(); // lee el parametro "id" de la ruta
    const [stateId, setStateId] = useState();

    useEffect(()=>{
        console.log(id)
        setStateId(id) // pone ese valor en un estado
    }, [id]); // se fija cada vez que "id" cambia


    return (
        <div>
            <h1>Detalle de {stateId}</h1>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;






        