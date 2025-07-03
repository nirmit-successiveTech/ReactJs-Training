import withAuth from "@/app/day-5/hoc/withAuth";


 function TryComponent({name,email,authDetails}){
    return(
        <div>
           <div>{name}</div>
           <div>{email}</div>
            <div><button onClick={authDetails}>check</button></div>
        </div>
    )
}

const TryComponentWithAuth = withAuth(TryComponent);
export default TryComponentWithAuth;