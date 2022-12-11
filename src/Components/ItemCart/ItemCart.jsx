import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './ItemCart.css';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';


const ItemCart = ({ producto})=>{
    const {removeCart, Compra, onAdd} = useCartContext();
    return(
        <div className='card'>
        
            
        <img src={producto.image} alt={producto.producto} className='imagen'/>
        <div className='bodycard'/>

        <h2 className='nombre'>{producto.producto} </h2>
        <h4 className='precio'>{producto.precio}</h4>
        <h4 className='cantidad'>{producto.count}</h4>
        <p>Subtotal ${producto.count * producto.precio} </p>
        <button onClick={() => removeCart(producto.id)}>Eliminar</button>
            {
                Compra
                ? <Link to='/Cart'>terminar compra</Link>
                : <ItemCount initial={1} stock={8} onAdd={onAdd}/>
            }
        <div/>
    
</div>
    )
}

export default ItemCart; 
