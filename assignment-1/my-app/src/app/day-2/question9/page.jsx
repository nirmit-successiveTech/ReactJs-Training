"use client"
import { useTheme } from "../context/ThemeContext"

export default function Question9(){

    const {theme,settheme,style}= useTheme()

    function toggleTheme(){
        settheme(prev => prev==='light'?'dark':'light')
    }

    return(
        <div style={style[theme]} className="parent">
            <div className="mybtn">
                <button onClick={toggleTheme}>toggle</button>
            </div>
        </div>
    )
}