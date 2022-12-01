import React, {useState} from "react"
import Cart from "../Components/Cart/Cart";


export const CartContext = React.createContext();



const CartProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addProdruct = (item, count)=>{
        let newCart;
        let producto = Cart.find(producto =>producto.id === item.id);
        if (producto){
            producto.count +=count;
            newCart = [...cartList];

        } else{
            producto = {...item,count: count};
            newCart = [...cartList, producto];
        }
        setCartList(newCart)
    } 

    const deleteCart = () => setCartList([]);

    const findCart = (id) => cartList.find(Item => Item.id === id) ? true : false; 

    const removeCart =(id) =>setCartList([]);
    




    return (
        <CartContext.Provider value={{
            deleteCart,
            findCart,
            removeCart,
            addProdruct,
        }}>
            {children}
            
        </CartContext.Provider>
    )
}

export default CartProvider;