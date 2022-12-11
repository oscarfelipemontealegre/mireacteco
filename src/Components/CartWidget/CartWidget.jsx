
import  ShoppingCart  from "@mui/icons-material/ShoppingCart";
import  IconButton  from "@mui/material/IconButton";

import { useCartContext } from "../../Context/CartContext";





export const CartWidget = () =>{
    const {productosTotales} = useCartContext();
    
    
    return(
        <IconButton>
            <ShoppingCart color="success"/>
            <span>{productosTotales() ||''}</span>
        </IconButton>
        
    );
    
}

export default CartWidget;