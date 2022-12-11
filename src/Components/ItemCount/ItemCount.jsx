import  './ItemCount.css';
import React from "react";
import { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial);

    const disminuir = () =>{
        setCount( count - 1);
    }
    
    const aumentar = () =>{
        setCount( count + 1);
    }

    return(
    
        <div className='counter'>
            <button className='boton' disabled={count <= 1} onClick={disminuir}>-</button>
            <span>{count}</span>
            <button className='boton' disabled={count >= stock} onClick={aumentar}>+</button>

            <div>
            <br/>
            <button className='carrito' onClick={() =>onAdd(count)}>agregar al carrito</button>
            </div>
        </div>
    );
}


export default ItemCount;