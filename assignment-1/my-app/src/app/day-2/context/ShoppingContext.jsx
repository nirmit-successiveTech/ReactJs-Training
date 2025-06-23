"use client"
const { createContext, useContext, useState } = require("react");



const ShoppingCart = createContext();    // creating context
export const useCart=()=>useContext(ShoppingCart);  //hook to use context


export default function CartProvider({children}){

    const [price,setprice]=useState(1000);
    const [cart,setcart]=useState(0);
    const img=['https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE',
        'https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU'
    ]

    return(
        <ShoppingCart.Provider value={{price,setprice,cart,setcart,img}}>
            {children}
        </ShoppingCart.Provider>
    )
}