"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from "react-toastify";


export default function withAuth(Component){

    return function Auth(props){
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const router = useRouter();

    const authDetails =(e)=>{
        e.preventDefault();
        if(!name || !email){
            router.push('/day-5')
        }else{
            toast("Logged In successfully")
        }
    }

        return(
            <div>
        <input type="text" placeholder="Enter the name" onChange={(e)=>setname(e.target.value)}/>
        <input type="text" placeholder="Enter the email" onChange={(e)=>setemail(e.target.value)}/>
            <Component {...props} name={name} email={email} authDetails={authDetails}/>

        </div>
        )
    }

}

