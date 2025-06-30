"use client"

import axios from "axios";
import { useEffect, useState } from "react"

export default function Question2(){

    const [datavalue,setdatavalue]=useState([]);
    const [error,seterror]=useState(null);

    const fetchData=async()=>{
        try {
            const fetchvalue = await axios.get('https://jsonplaceholder.typicode.com/users')
            setdatavalue(fetchvalue.data);
            seterror(false);
        } catch (error) {
            seterror(true);
            console.log("some error",error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(error){
        return(
        <div>
            <button onClick={fetchData}>Retry</button>
        </div>
        )

    }

    return(
        <div>
            {datavalue.map((item,index)=>(
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}