"use client"
export default function useLocalStorage(key){
    const setitem =(value)=>
        localStorage.setItem(key,value);
    

    const getitem = ()=>{
        let StoredValue=localStorage.getItem(key);
        return StoredValue;
    }
    
    return(
            {setitem,getitem}
    )
}