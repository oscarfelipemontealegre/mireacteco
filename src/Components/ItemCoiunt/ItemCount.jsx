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
            <button disabled={count <= 1} onClick={disminuir}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={aumentar}>+</button>

            <div>
            <br/>
            <button onClick={() =>onAdd(count)}>agregar al carrito</button>
            </div>
        </div>
    );
}


export default ItemCount;