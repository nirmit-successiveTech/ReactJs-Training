"use client";
import { useEffect, useState } from "react";

export default function Assessment() {
 

  useEffect(() => {
    alert("PLease select the box");
  }, []);

  const [arr, setarr] = useState([
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]);

  

  const GenerateRandom = (val) => {                 // Function to generate a random value


    setarr(arr.filter((item,index)=>item!==val));     // Filtering the the size of array based of current cell selected by the user
    console.log("filtered array is",arr)

    let randomval = Math.random() * 10;           // using random value between 0-9
    randomval = parseInt(randomval);              // parsing to interger
    randomval = randomval%arr.length;        // since array size is shrinking by filter, so we need to keep randomval in range.

    let stringval = arr[randomval];         // using random cell of arr to simulate AI
    console.log(stringval);

    if (stringval == val ) {       //In case string value is same as current, a recursive call
      GenerateRandom(val);
    } else {
      document.getElementById(stringval).innerText = "0";  // manipulating by DOM
    }
  };

  const handleclick = (val) => {
    document.getElementById(val).innerText = "X";     //On each call a cell value is updated to X

    GenerateRandom(val);                      // Calling a function to generate random value
  };

  return (
    <div>
      <div className="container">
        <div id="one" onClick={() => handleclick("one")}></div>
        <div id="two" onClick={() => handleclick("two")}></div>
        <div id="three" onClick={() => handleclick("three")}></div>
        <div id="four" onClick={() => handleclick("four")}></div>
        <div id="five" onClick={() => handleclick("five")}></div>
        <div id="six" onClick={() => handleclick("six")}></div>
        <div id="seven" onClick={() => handleclick("seven")}></div>
        <div id="eight" onClick={() => handleclick("eight")}></div>
        <div id="nine" onClick={() => handleclick("nine")}></div>
      </div>
    </div>
  );
}
