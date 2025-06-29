"use client"
import { useState } from "react"

export default function InputComponent() {
    const [name, setname] = useState('');
    const [val, setval] = useState('');

    const HandleClick = () => {
        setval(name);
    }

    return (
        <div style={{margin:'auto',width:'50%',display:'flex',flexDirection:'column',gap:'20px',alignItems:'center',paddingTop:'25%'}}>
            <div>
            </div> <input type="text" placeholder="Enter the Name" onChange={(e) => setname(e.target.value)} />

            <div>
                <button onClick={HandleClick}>Show</button>
            </div>
            <div>{val}</div>
        </div>
    )
}