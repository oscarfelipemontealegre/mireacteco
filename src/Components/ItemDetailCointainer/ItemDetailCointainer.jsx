import { getProduct } from '../../mock/data';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';



const productosPet=[
    { id:1, image: "https://www.ammascotas.com/wp-content/uploads/2016/11/Dosificadordobleusorojo.jpg",
        producto:"comedero", precio:10000, unidades:6},]
    
const ItemDetailCointainer =()=>{
    const [detalle, setDetalle] = useState({});
    const{detalleId}=useParams()


    useEffect(()=>{
        getProduct(detalleId).then(res => setDetalle(res))
    }, [detalleId])
    
    return(
    <div>
        <ItemDetail detalle={detalle}/>
    </div>
    )

}

export default ItemDetailCointainer;