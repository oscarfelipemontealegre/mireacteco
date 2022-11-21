
import React from 'react';
import ItemCount from '../ItemCoiunt/ItemCount';



const ItemDetail =({detalle})=>{
    const  onAdd = (cantidad) =>{}
    return(
        <div className='card'>
        <a href='/' className='productosPet'>
            
            <img src={detalle.image} alt={detalle.producto} className='imagen'/>
            <div className='bodycard'>

            <h2 className='nombre'>{detalle.producto} </h2>
            <h4 className='precio'>{detalle.precio}</h4>
             <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <a href="/" className='btn btn-primary'>comprar</a>
            </div>
        </a>
    </div>
    );

}

export default ItemDetail;