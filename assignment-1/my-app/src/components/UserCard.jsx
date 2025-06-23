import Image from "next/image";



export default function UserCard({name,email,url}){
    return(
        <>
        <div id="one">
            <div id="two">
                <img src={url} width={250} height={150}/>
                <p>name:{name}</p>
                <p>email:{email}</p>
            </div>
        </div>
        </>
    )
}