import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../../Components/ItemCart/ItemCart';
import {getFirestore, addDoc, collection} from 'firebase/firestore';

const Cart = ()=>{
        const { cartList, precioTotal} = useCartContext();

        const order ={
            buyer:{
                nombre: 'oscar_rodriguez',
                email:'oscar@gmail.com',
                telefono:'3002343343',
                direccion: 'calle55n#12-34'
            },
            items: cartList.map(productostuamigofiel =>({ id:productostuamigofiel.id, producto:productostuamigofiel.producto, precio:productostuamigofiel.precio, categoria:productostuamigofiel.categoria})),
            total: precioTotal(),
        }

        const handleClick=()=>{
            const db = getFirestore();
            const ordenesColletion = collection(db,'ordenes');
            addDoc(ordenesColletion,order)


        }

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
            <button  onClick={handleClick}> emitir compra</button>
            </div>
        </>
    )
}

export default Cart;

