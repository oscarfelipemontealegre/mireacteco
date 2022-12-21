import React from "react";
import  Title from '../Title/Title';
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs,query,where} from 'firebase/firestore';


export const ItemListContainer =(props)=>{
    const [data,setData]= useState([]);
    const {categoriasId}=useParams()
    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productostuamigofiel');
        
            if (categoriasId){
                const queryFilter = query(queryCollection, where('categoria', '==', categoriasId))
                getDocs(queryFilter)
                    .then(res => setData(res.docs.map((productostuamigofiel)=>({ id: productostuamigofiel.id, ...productostuamigofiel.detalle() }))));
                setData(res.filter((productostuamigofiel) => productostuamigofiel.categoria === categoriasId))
            }else{
                getDocs(queryCollection)
                    .then(res => setData(res.docs.map(productostuamigofiel=>({ id: productostuamigofiel.id, ...productostuamigofiel.detalle() }))));
            }
        
            
    }, [categoriasId])

    

    return(
        <>
            <Title/>
            
            <ItemList data={data} />
            
        </>
    );
    }
    

export default ItemListContainer;