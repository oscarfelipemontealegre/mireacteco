import '../Item/Item.css';
import React from 'react';
import { Link } from 'react-router-dom';



const Item =({info})=>{
    

    return(
        

    <div className='card mb-5'>
        <Link  to={`/detalle/${info.id}`} className='productosPet'>
            
            <img src={info.image} alt="" className='imagen'/>
            <div className='bodycard'>

            <h2 className='nombre'>{info.producto} </h2>
            <h4 className='precio'>{info.precio}</h4>
            <a href="/" className='btn btn-primary'>comprar</a>
            </div>
        </Link>
    </div>
    
    );

}

export default Item;