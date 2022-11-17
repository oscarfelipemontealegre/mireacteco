import React from "react";
import ItemCount from "../ItemCoiunt/ItemCount";
import  Title from '../Title/Title';
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";



    const productosPet=[
            { id:1, image: "https://www.ammascotas.com/wp-content/uploads/2016/11/Dosificadordobleusorojo.jpg",
                producto:"comedero", precio:10000},
            { id:2, image: "https://www.ammascotas.com/wp-content/uploads/2018/08/Luxury-Acolchada.jpg",producto:"camas",
            precio:70000},]

export const ItemListContainer =(props)=>{
    const [data,setData]= useState([]);
    useEffect(() =>{
        const getData = new Promise(resolve=>{
            setTimeout(() =>{
                resolve(productosPet);
            },3000 );
        });
        getData.then(res=> setData(res))
    }, [])

    const  onAdd = (cantidad) =>{}

    return(
        <>
            <Title/>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data} />
            
        </>
    );
    }
    

export default ItemListContainer;