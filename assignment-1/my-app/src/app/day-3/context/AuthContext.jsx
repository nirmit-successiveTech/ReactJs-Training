"use client"
import { createContext, useContext, useState } from "react"


const authUser = createContext();
export const useAuth = ()=>useContext(authUser)

export default function AuthProvider({children}){

    const [flag,setflag]=useState(true);
    
    return(
        <authUser.Provider value={{flag,setflag}}>
            {children}
        </authUser.Provider>
    )
}