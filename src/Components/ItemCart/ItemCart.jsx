import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './ItemCart.css';
import { Link } from "react-router-dom";



const ItemCart = ({ producto})=>{
    const {removeCart} = useCartContext();
    return(
        <div className='card mb-5'>
        
            
        <img src={producto.image} alt={producto.producto} className='imagen'/>
        <div className='bodycard'/>

        <h2 className='nombre'>{producto.producto} </h2>
        <h4 className='precio'>{producto.precio}</h4>
        <h4 className='cantidad'>{producto.count}</h4>
        <p>Subtotal ${producto.count * producto.precio} </p>
        <br/>
        
        <br />
            <div>
              <button className='eliminar' onClick={() => removeCart(producto.id)}>Eliminar</button>
               <br />
                <Link to='/Cart' className='aling-content-center'  >terminar compra</Link>
            </div>   
        <div/>
    
</div>
    )
}

export default ItemCart; 
