"use client"
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext"

export default function Question10(){
    const {lang,setlang} = useLanguage();
    const [cnt,setcnt]= useState(0);
    function HandleClick(){
        setcnt((prev)=>prev===0?1:0)
    }

    return(
        <div style={{width:'50%',textAlign:"center",margin:'auto'}}>
            <div style={{fontSize:'30px',paddingTop:'20px'}}>{lang[cnt]}</div>
            <div><button onClick={HandleClick} style={{backgroundColor:'blue',color:'white',fontWeight:'bold',fontSize:'20px',borderRadius:'10px',border:'none'}}>{cnt===0?'Spanish':'English'}</button></div>
        </div>
    )
}