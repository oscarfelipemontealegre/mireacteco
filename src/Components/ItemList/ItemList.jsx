import Item from '../Item/Item';
import React from 'react';

const itemList =({data = []})=>{
    return(
        data.map(productosPet => <Item key={productosPet.id} info={productosPet}/>)
    );

}

export default itemList;