"use client"
import { useMemo, useState } from "react"

export default function StudentList(){
    
    const [name,setname]=useState(['nirmit','ayush','ankit','ujjwal','rohan','anurag'])
    const [newname,setnewname]=useState('');

    function AddName(){
        setname([...name,newname]);
        setnewname(' ')
    }

    const students = useMemo(()=>{
        return name
    },[name])

    return(
        <div>
            {students.map((item,index)=>(
                <div key={index}>
                    {item}
                </div>
            ))}
            <div>
                <div><input type="text" placeholder="Enter the Name" value={newname} onChange={(e)=>setnewname(e.target.value)} /></div>
                <div><button onClick={AddName}>Add</button></div>
            </div>
        </div>
    )
}