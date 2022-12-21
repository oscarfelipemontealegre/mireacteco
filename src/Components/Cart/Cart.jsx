import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../../Components/ItemCart/ItemCart';

const Cart = ()=>{
        const { cartList, precioTotal} = useCartContext();

        if (cartList.length === 0){
            return (
                <>
                    <p>No hay productos en el Carrito</p>
                    <Link to='/'>Mirar mas productos </Link>
        
        
                </>
            )
        }

    return (
        <>
            {
                cartList.map( producto => <ItemCart key={producto.id} producto={producto} />)
            }
            <div>
            <button className='total align-content-between'>
                Total: {precioTotal()}
            </button>
            </div>
        </>
    )
}

export default Cart;

