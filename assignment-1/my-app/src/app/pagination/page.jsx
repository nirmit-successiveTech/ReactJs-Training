


export default async function  Pagination(){

 const mydata = await fetch('https://jsonplaceholder.typicode.com/users');
 const result = await mydata.json();
 console.log(result);

 const response = result.map(({id,name,username})=>({
    
 }

 ))

 return(
    <div>
        {JSON.stringify(result,null,2)}
    </div>
 )

}