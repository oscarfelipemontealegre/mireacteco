
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore, doc, getDoc} from 'firebase/firestore';



    
    function ItemDetailCointainer() {
        const [detalle, setDetalle] = useState({});
        const { detalleId } = useParams();


        useEffect(() => {
            const querydb = getFirestore();
            const queryDoc = doc(querydb, 'productostuamigofiel','detalleId');
            getDoc(queryDoc)
                .then(res => setDetalle({ id: res.id, ...res.detalle() }));
        }, []);

        return (

            <ItemDetail detalle={detalle} />

        );

    }
    
export default ItemDetailCointainer;