
import React from 'react';
import ItemCount from '../ItemCoiunt/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';





const ItemDetail =({detalle})=>{
    const [Compra, setCompra] = useState(false)
    
    const  onAdd = (count) =>{
        setCompra(true);

    }
    return(
        <div className='card'>
        <Link to='/' className='productosPet'>
            
            <img src={detalle.image} alt={detalle.producto} className='imagen'/>
            <div className='bodycard'/>

            <h2 className='nombre'>{detalle.producto} </h2>
            <h4 className='precio'>{detalle.precio}</h4>
                {
                    Compra
                    ? <Link to='/Cart'>terminar compra</Link>
                    : <ItemCount initial={1} stock={8} onAdd={onAdd}/>
                }
            <div/>
        </Link>
    </div>
    );

}

export default ItemDetail;