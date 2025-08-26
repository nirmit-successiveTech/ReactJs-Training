"use client"

import { useEffect, useState } from "react"

export default function Q20() {
    const list = ['eat','sleep','coding','repeat'];
    const [task, settask] = useState(list);
    const [name, setname] = useState('');

    useEffect(() => {
        if(name){
 const filteredarray = list.filter((item) => item.includes(name));
        settask(filteredarray);
        }
       
    }, [name]);

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="enter task" 
                    value={name}
                    onChange={(e) => setname(e.target.value)} 
                />
            </div>
            <div>
                {task.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}
