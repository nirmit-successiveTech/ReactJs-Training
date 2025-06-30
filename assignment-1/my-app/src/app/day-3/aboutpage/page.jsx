"use client"

import Router from "next/router";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function About(){
    const router= useRouter();
    const {flag,setflag}=useAuth();
        useEffect(()=>{
            console.log("this is the flag",flag)

        if(!flag){
            console.log("this is the flag",flag)
            router.push('/day-3/login')
        }
    },[])
    console.log("hello nirmit ji",flag)
    return(
        <div style={{backgroundColor:"rgb(250, 249, 246)",height:'100vh'}}>
            <div style={{margin:'auto',width:'75%',textAlign:'center',paddingTop:'25%'}}>
                            {flag ? (
                <div  style={{fontSize:'50px',fontWeight:"bold"}}>Welcome to About Page</div>
            ):(
                <div style={{fontSize:'50px',fontWeight:"bold"}}>
                    Kindly, Login
                </div>
            )}
            </div>

        </div>
    )
}