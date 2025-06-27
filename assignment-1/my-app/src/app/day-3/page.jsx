"use client"

import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

export default function Page(){
        const {flag,setflag}=useAuth();
        console.log(flag)

    return(
                <div style={{backgroundColor:"rgb(250, 249, 246)",height:'100vh'}}>
                    <div style={{fontSize:'50px',textAlign:'center',paddingTop:'25%',fontWeight:'bold'}}>
                    Welcome,Nirmit
                    </div>
            </div>

        
    )
}