import { useState } from "react";

export default function useClipboard(){
    const [status,setstatus]=useState('Copy');
    const copy=(text)=>{
        let element = document.createElement('textarea');
        element.value = text;
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
        setstatus('Copied');
    }
    return {status,copy}
}