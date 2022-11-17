import '../Item/Item.css';
import React from 'react';

const Item =(info)=>{
    return(
        <a href='/' className='productosPet'>
            <img src={info.image} alt=""/>
            <p>{info.producto} </p>
            <p>{info.precio}</p>
        </a>
    );

}

export default Item;