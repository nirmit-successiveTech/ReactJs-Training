"use client"

import axios from "axios";
import { useEffect, useState } from "react"

export default function FetchLoadingComponent(){

    const [datavalue,setdatavalue]=useState([]);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null);

    const fetchData=async()=>{
        try {
            const fetchvalue = await axios.get('https://jsonplaceholder.typicode.com/users')
            setdatavalue(fetchvalue.data);
            setloading(false);
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

    if(loading){
        return(
            <div>Loading............</div>
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