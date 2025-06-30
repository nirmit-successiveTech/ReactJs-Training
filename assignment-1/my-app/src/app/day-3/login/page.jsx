"use client"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMyTheme } from "../context/ThemeProvider";
import { useAuth } from "../context/AuthContext";


export default function Login() {
    const { flag, setflag} = useAuth();    //from authcontext
    const {theme,settheme,style}=useMyTheme();
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const router = useRouter()

    const Handlesubmit = (e) => {
        e.preventDefault()    //prevent reloading of the form
        if (name == 'nirmit' && password == '123') {
            setflag(true);
            console.log("flag is", flag);
            toast('User LoggedIn Successfully');
            setInterval(() => {
                router.push('/day-3/aboutpage');
            }, 2000);

        }
        setname(' ')
        setpassword(' ')
    }
    console.log("my flag", flag)  // debugging message

    const ChangeTheme=()=>{
        settheme((prev)=>prev=='light'?'dark':'light')
    }

    return (
        <div style={style[theme]}>
            <button onClick={ChangeTheme} style={{margin:'5px',backgroundColor:'rgb(49, 137, 221)',color:'white',border:'none',borderRadius:'10px'}}>Toggle</button>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <div>
                    <form style={{ display: "flex", flexDirection: "column", gap: '20px', paddingTop: '200px', textAlignLast: "center" }}>
                        <div style={{fontSize:"40px",fontWeight:"bold"}}>Log In</div>
                        <input type="text" placeholder="enter the text" onChange={(e) => setname(e.target.value)} value={name} />
                        <input type="text" placeholder="enter the password" onChange={(e) => setpassword(e.target.value)} value={password} />
                        <div>
                            <button onClick={Handlesubmit} style={{ backgroundColor: 'rgb(49, 137, 221)', color: "white", paddingLeft: '20px', paddingRight: '20px', fontSize: '20px', border: 'none', borderRadius: '15px' }}>submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}