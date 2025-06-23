export default function Child({name,handleClick,count,resetValue}){

   
    console.log('child component');
    return(
        <div>
            <div>{count}</div>
            <button onClick={handleClick}>{name}</button>
            <button onClick={resetValue}>Reset</button>

        </div>
    )
}