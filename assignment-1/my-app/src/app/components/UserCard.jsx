import Image from "next/image";



export default function UserCard({name,email,url}){
    return(
        <>
        <div id="one">
            <div id="two">
                <p>name:{name}</p>
                <p>email:{email}</p>
                <img src={url} width={250} height={100}/>
            </div>
        </div>
        </>
    )
}