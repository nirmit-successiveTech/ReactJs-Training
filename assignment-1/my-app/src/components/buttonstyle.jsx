export default function Styler({color,text}){
    return(
        <>
        <button style={{backgroundColor:color}} className="incbtn"> {text} </button>
        </>
    )
}