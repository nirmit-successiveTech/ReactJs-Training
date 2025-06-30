"use client"
import { createContext, useContext, useState } from "react"


const AuthContext = createContext();
export const useAuth=()=> useContext(AuthContext);

export default function AuthProvider({children}){
    const [flag,setflag]=useState(false);
    return(
        <AuthContext.Provider value={{flag,setflag}}>
            {children}
        </AuthContext.Provider>
    )
}