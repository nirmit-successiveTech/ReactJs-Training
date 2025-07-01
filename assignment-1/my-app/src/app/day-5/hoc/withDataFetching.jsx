"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function withDataFetching(Component) {


    return function DataFetched(props){
    const [mydata, setmydata] = useState([]);

        const fetchdata=async()=>{
            try {
                const fetchvalue =await axios.get('https://jsonplaceholder.typicode.com/users')
                setmydata(fetchvalue.data);
            } catch (error) {
                console.log("some error q16");
            }
        }

        useEffect(()=>{
            fetchdata();
        },[])

        return(
            <div>
             <Component {...props} mydata={mydata} />
            </div>

        )
    }

    

  
}
