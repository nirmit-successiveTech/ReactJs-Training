export default function Weather({temperature}){
    let message;
    if (temperature > 25){
            message="Its sunny day"
        }else{
            message="It's cold day"
        }
    return(
        <>
        <p id="msg">{message}</p>
        </>
        
    )
}