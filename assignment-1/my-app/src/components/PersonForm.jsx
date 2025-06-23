"use client"
import { useState } from "react"

export default function PersonForm(){
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [age,setage]=useState('')
    return(
        <div className="parent-form">
        <div className="form-wrapper">
            <form action="">
            <input type="text" placeholder="Enter Your Firstname" onChange={(e)=>setfirstname(e.target.value)}/>
            <input type="text" placeholder="Enter Your LastName" onChange={(e)=>setlastname(e.target.value)}/>
            <input type="text" placeholder="Enter Your age" onChange={(e)=>setage(e.target.value)}/>
        </form>
        </div>


        <div className="form-child">
            <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{age}</div>
        </div>
        </div>
    )
}