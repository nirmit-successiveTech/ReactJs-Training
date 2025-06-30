"use client"
import { useEffect, useState } from "react"

export default function Notification(){
    const [msg,setmsg]=useState('');
    const [val,setval]=useState('');

    function HandleClick(){
        setmsg(val)
    }

    useEffect(()=>{
       const id =  setTimeout(()=>{
            console.log(msg);
            setmsg('')
        },5000);

        return ()=>clearTimeout(id)
    },[msg])


    return(
        <div className="notification-wrapper" style={{margin:'auto',width:'50%',textAlign:'center',paddingTop:'20px',display:'flex',flexDirection:'column',gap:"15px"}}>
            <div>
                <input type="text"  placeholder="Enter text to be notified" onChange={(e)=>setval(e.target.value)} style={{padding:'10PX'}}/>
            </div>
                <div><button onClick={HandleClick} style={{padding:'15px',backgroundColor:'green',color:'white',border:'none',width:'100px',borderRadius:'10px'}} >Add</button></div>
            <p>{msg}</p>
        </div>
    )
}