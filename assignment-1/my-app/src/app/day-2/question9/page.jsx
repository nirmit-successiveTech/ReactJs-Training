"use client"
import { useTheme } from "../context/ThemeContext"

export default function Question9(){

    const {theme,settheme,style}= useTheme()

    function toggleTheme(){
        settheme(prev => prev==='light'?'dark':'light')
    }

    return(
        <div style={style[theme]} className="parent" >
            <div className="mybtn" style={{margin:'auto',width:'50%',textAlign:'center',paddingTop:'20px'}}>
                <button onClick={toggleTheme}>toggle</button>
            </div>
        </div>
    )
}