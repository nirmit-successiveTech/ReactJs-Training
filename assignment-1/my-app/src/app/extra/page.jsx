"use client"
import { useEffect, useState } from "react";
import useFetch from "../day-2/hook/useFetch"

export default function Extra(){

    const {fetchdata,val} = useFetch();
    // const [arr,setarr]=useState([]);
    
        const medata = async()=>{
            await fetchdata('https://jsonplaceholder.typicode.com/users')
            
        }
        
    useEffect(()=>{

        medata();
    },[])

    if(val.length==0){
        return(
            <div>Loading............</div>
        )
    }

    return(
        <div>
            {val.map((item,index)=>(
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}