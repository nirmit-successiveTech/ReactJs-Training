"use client"
import { useTheme } from "@/app/day-2/context/ThemeContext";
import { createContext, useContext, useState } from "react"

const ThemeContext = createContext();
export const useMyTheme =()=>useContext(ThemeContext);


export default function ThemeProvider({children}){
const [theme,settheme]=useState('light')
        const style={
        light:{
            backgroundColor: 'rgb(250, 249, 246)',
            height: '100vh',

        },
        dark:{
            backgroundColor:'black',
            height: '100vh',
            color: 'white',
        }
    }

    return(
        <ThemeContext.Provider value={{style,theme,settheme}}>
        {children}
        </ThemeContext.Provider>
    )
}