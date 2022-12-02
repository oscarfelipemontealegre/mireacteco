import '../Item/Item.css';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


const Item =({info})=>{
    

    return(
        

    <div className='card'>
        <Link  to={`/detalle/${info.producto}`} className='productosPet'>
            
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