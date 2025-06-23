"use client"
import { createContext, useContext, useState } from "react"


const LanguageSwitcher = createContext();

export const useLanguage=()=>useContext(LanguageSwitcher)


export default function Language({children}){
    const [lang,setlang]=useState(['Hello User Welcome to Nextjs','Bonjour utilisateur, bienvenue sur Nextjs'])
    return(
        <LanguageSwitcher.Provider value={{lang,setlang}}>
            {children}
        </LanguageSwitcher.Provider>
    )
}