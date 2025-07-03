"use  client"
import { useEffect } from "react"

export default function withLogger(Component){
    return function LoggedComponent(props){
        useEffect(()=>{
            console.log('Component mounted');

            return()=>{
                console.log("component unmounted")
            }
        },[])

        useEffect(()=>{
            console.log("component updated");
        })

        return(
            <Component {...props} />
        )
    }
}