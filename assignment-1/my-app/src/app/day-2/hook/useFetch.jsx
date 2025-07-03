"use client"
import axios from "axios";
import { useState } from "react";

export default function useFetch(){
    const [val,setval]=useState([])
    const fetchdata = async(api)=>{
        try {
            const myval = await axios.get(api);
            setval(myval.data);
        } catch (error) {
            console.log("some error",error);
            return "there is some error";

        }
    }

    return {fetchdata,val};
}