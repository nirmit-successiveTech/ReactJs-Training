"use client"
import { useState } from "react"
import useClipboard from "../hook/useClipboard"



export default function Question17(){
    const [val,setval]=useState('')
    const {status,copy}=useClipboard()
    return(
        <div style={{width:"50%",textAlign:"center",margin:'auto',paddingTop:'20px'}}>
            <div>
                <input type="text" name="" id="" onChange={(e)=>setval(e.target.value)} style={{padding:'10px',width:"500px"}}/>
                <div>
                    <button onClick={()=>copy(val)} style={{color:'white',backgroundColor:'rgb(49, 137, 221)',padding:'20px',fontSize:'20px',borderRadius:'10px',border:'none'}}>{status}</button>
                </div>
            </div>
        </div>
    )
}