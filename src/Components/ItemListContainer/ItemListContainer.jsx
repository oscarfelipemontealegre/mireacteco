import React from "react";
import  Title from '../Title/Title';
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getData } from "../../mock/data";
import { useParams } from "react-router-dom";


export const ItemListContainer =(props)=>{
    const [data,setData]= useState([]);
    const {categoriasId}=useParams()
    useEffect(() =>{
        getData.then(res=> {
            if (categoriasId){
                setData(res.filter((item) => item.categoria === categoriasId))
            }else{
                setData(res)
            }
        })
            
    }, [categoriasId])

    

    return(
        <>
            <Title/>
            
            <ItemList data={data} />
            
        </>
    );
    }
    

export default ItemListContainer;