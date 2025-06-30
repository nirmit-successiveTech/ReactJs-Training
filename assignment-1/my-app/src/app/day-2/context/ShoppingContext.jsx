"use client"
const { createContext, useContext, useState } = require("react");
const products = [
    {
        id:1,
        img:'https://fastly.picsum.photos/id/11/200/200.jpg?hmac=LBGO0uEpEmAVS8NeUXMqxcIdHGIcu0JiOb5DJr4mtUI',
        price:700,
        count:0
    },
        {
        id:2,
        img:'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE',
        price:1000,
        count:0

    },
        {
        id:3,
       img: 'https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU',
        price:1400,
        count:0

    },
        {
        id:4,
        img:'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        price:1700,
        count:0

    },
        {
        id:5,
        img:'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        price:2000,
        count:0

    }
]


const ShoppingCart = createContext();    // creating context
export const useCart=()=>useContext(ShoppingCart);  //hook to use context


export default function CartProvider({children}){

    const [price,setprice]=useState(0)
    

    return(
        <ShoppingCart.Provider value={{price,setprice,products}}>
            {children}
        </ShoppingCart.Provider>
    )
}