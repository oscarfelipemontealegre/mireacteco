import './ItemDetail.css';
import React from 'react';
import ItemCount from '../ItemCoiunt/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext';


const ItemDetail =({detalle})=>{
    const [Compra, setCompra] = useState(false)
    const {addProdruct}= useCartContext();

    const  onAdd = (count) =>{
        setCompra(true);
        addProdruct(detalle, count);
    }
    
    return(
        <div className='card'>
        
            
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
        
    </div>
    );

}


export default ItemDetail;