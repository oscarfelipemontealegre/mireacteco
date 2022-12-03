import React, {useState, useContext} from "react"


const CartContext = React.createContext([]);
export const useCartContext = () =>  useContext(CartContext)



const CartProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addProdruct = (item, count)=>{
        //let newCart;
        //let producto = Cart.find(producto =>producto.id === item.id);
        //if (producto){
          //  producto.count +=count;
           // newCart = [...cartList];

       // } else{
           // producto = {...item,count: count};
           // newCart = [...cartList, producto];
        //}
        //setCartList(newCart)
        if (findCart(item.id)) {
            setCartList(cartList.map(producto =>{
                return producto.id === item.id ? {...producto,count: producto.count + count} : producto
            }));
        } else{
            setCartList([...cartList, {...item, count}]);
        }
    } 
    
    const precioTotal = () =>{
        return cartList.reduce ((prev, act) => prev + act.count * act.precio, 0);
    }

    const  productosTotales = () => cartList.reduce((acumulador, productoActual)=> acumulador + productoActual.count, 0)

    const deleteCart = () => setCartList([]);

    const findCart = (id) => cartList.find(Item => Item.id === id) ? true : false; 

    const removeCart =(id) =>setCartList([]);
    




    return (
        <CartContext.Provider value={{
            deleteCart,
            findCart,
            removeCart,
            addProdruct,
            precioTotal,
            productosTotales,
            cartList
        }}>
            {children}
            
        </CartContext.Provider>
    )
}

export default CartProvider;