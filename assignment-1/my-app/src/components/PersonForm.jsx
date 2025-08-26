"use client"
import { useState } from "react"

export default function PersonForm(){
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [age,setage]=useState('')
    return(
        <div className="parent-form" style={{width:"50%",margin:"auto",paddingTop:'20px'}}>
        <div className="form-wrapper">
            <form action="">
            <input type="text" placeholder="Enter Your Firstname" onChange={(e)=>setfirstname(e.target.value)} />
            <input type="text" placeholder="Enter Your LastName" onChange={(e)=>setlastname(e.target.value)}/>
            <input type="text" placeholder="Enter Your age" onChange={(e)=>setage(e.target.value)}/>
        </form>
        </div>


        <div className="form-child" style={{margin:"auto",width:"50%",paddingTop:'20px',textAlign:"center"}}>
            <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{age}</div>
        </div>
        </div>
    )
}