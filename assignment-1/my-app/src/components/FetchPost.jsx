"use client"
import axios from "axios";
import { useEffect, useState } from "react"

export default function FetchPost(){
    const [data,setdata]=useState([]);
    const [error,seterror]=useState(null);

    const fetchdata=async()=>{
        try {
            const fetchdata = await axios('https://jsonplaceholder.typicode.com/users')
            setdata(fetchdata.data);
            seterror(false);
        } catch (error) {
            console.log("erorrrr")
            seterror(true);
        }
    }

    useEffect(()=>{
        fetchdata();
    },[]);

    if(error){
        <div>
            <button onClick={fetchdata}>Retry</button>
        </div>
    }

    return(
        <div>
            {data.map((item,index)=>{
                <div>{item.name}</div>
            })}
        </div>
    )
}