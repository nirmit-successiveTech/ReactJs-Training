"use client"
import axios from "axios";
import { useState } from "react"

export default function FormComponent(){

    const [text,settext]=useState('');
    const [number,setnumber]=useState('');
    const [password,setpassword]=useState('');
    const [status,setstatus]=useState('')

    const handlclick =async(e)=>{
        e.preventDefault();
        const datasend= await axios.post('https://jsonplaceholder.typicode.com/posts',{
            text,number,password
        });

        if(datasend.status){
            // console.log(datasend.status)
            setstatus(datasend.status)
        }
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="Enter the name" onChange={(e)=>settext(e.target.value)}/>
                <input type="number" placeholder="Enter the number" onChange={(e)=>setnumber(e.target.value)}/>
                <input type="password" placeholder="Enter the password" onChange={(e)=>setpassword(e.target.value)}/>
                <button onClick={handlclick}>Submit</button>
            </form>
            <div>
                {status}
            </div>
        </div>
    )
}