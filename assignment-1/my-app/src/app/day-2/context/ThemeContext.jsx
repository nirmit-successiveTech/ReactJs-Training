"use client"
import { createContext, useContext, useState } from "react"


const ThemeContext = createContext();   //creating the context

export const useTheme=()=>useContext(ThemeContext)



export default function ThemeProvider({children}){


    const [theme,settheme]=useState('light');

    const style={
        light:{
            backgroundColor: '#ededed',
        },
        dark:{
            backgroundColor:'black',
        }
    }

    return(
        <ThemeContext.Provider value={{theme,settheme,style}}>
            {children}
        </ThemeContext.Provider>
    )
}