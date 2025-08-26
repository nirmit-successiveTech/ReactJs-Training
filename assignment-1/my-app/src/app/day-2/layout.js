"use client"
import Link from "next/link";
import CartProvider from "./context/ShoppingContext";
import ThemeProvider from "./context/ThemeContext";
import Language from "./context/LanguageContext";
import { useState } from "react";

export default function Layout2({ children }) {

  const [flag,setflag]=useState(false)

  const buttonvalues=[
    {
      val:'/day-2/question1'
    },
        {
      val:'/day-2/question2'
    },    {
      val:'/day-2/question3'
    },    {
      val:'/day-2/question4'
    },    {
      val:'/day-2/question5'
    },    {
      val:'/day-2/question6'
    },    {
      val:'/day-2/question7'
    },    {
      val:'/day-2/question8'
    },    {
      val:'/day-2/question9'
    },    {
      val:'/day-2/question10'
    },    {
      val:'/day-2/question11'
    },    {
      val:'/day-2/question12'
    },    {
      val:'/day-2/question13'
    },    {
      val:'/day-2/question14'
    },    {
      val:'/day-2/question15'
    },    {
      val:'/day-2/question16'
    },    {
      val:'/day-2/question17'
    },    {
      val:'/day-2/question18'
    },    {
      val:'/day-2/question19'
    },   
  ]

  function HandleClick(){
    setflag((prev)=>prev==true?false:true)
  }

  return (
    <ThemeProvider>
      <CartProvider>
        <Language>
        <div className="parent-button">
          <div className="heading-wrapper">
            <div>
              <button onClick={HandleClick}>See Question</button>
            </div>
            <div>
              <Link href={'/'}>
                <button>Home</button>
              </Link>
            </div>
          </div>
          <div className={flag?"sidebar-menu":"hide-menu"} >
            {buttonvalues.map((item,index)=>(
              <div key={index} className="sidebar-child">
                <Link href={item.val}>
                <button className="sidebar-button" onClick={HandleClick}>{index+1}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {children}  
        </Language>
      </CartProvider>
    </ThemeProvider>
  );
}
