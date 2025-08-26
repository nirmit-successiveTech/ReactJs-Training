"use client"
import axios from "axios";
import { useEffect, useState } from "react"

export default function FetchPost(){
    const [mydata,setmydata]=useState([]);
    const [error,seterror]=useState(null);
    const [loading,setloading]=useState('');

    const fetchdata=async()=>{
        try {
            const fetchdata = await axios.get('https://jsonplaceholder.typicode.com/users')
            setmydata(fetchdata.data);
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
        return(
        <div>
            <button onClick={fetchdata}>Retry</button>
        </div>
        )

    }

    return(
        <div>
            
            {mydata.map((item,index)=>{
                return <div>{item.name}</div>
            })}
        </div>
    )
}