export default function Child({name,handleClick,count,resetValue}){

   
    console.log('child component');
    return(
        <div>
            <div style={{fontSize:'50px'}}>{count}</div>

            <button onClick={handleClick} style={{padding:'15px',backgroundColor:'green',color:'white',border:'none',width:'100px',borderRadius:'10px'}} >{name}</button>
            
            <button onClick={resetValue} style={{padding:'15px',backgroundColor:'red',color:'white',border:'none',width:'100px',borderRadius:'10px'}} >Reset</button>

        </div>
    )
}