
"use client"
import Button from '@mui/material/Button';

export default function DumbButton({color}){
    return(
        <div>
            <Button color={color} onClick={()=>alert("Hello user")}>Perform</Button>
        </div>
    )
}
