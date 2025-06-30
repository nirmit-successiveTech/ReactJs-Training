
const fetchfunction = () =>{
    const datavalue = fetch('https://jsonplaceholder.typicode.com/users')
                        .then((response)=>response.json())
                        .then((data)=>{
                            console.log('hey data',data)
                            return data;
                        })
                        .catch((error)=>{
                            console.log("error fetching value",error)
                        })

                        return datavalue;
}

export default async function Question1() {
  
    let fetchdata
    try {
         fetchdata = await fetchfunction();
        console.log('data fetched',fetchdata);
        


    } catch (error) {
        console.log('some error')
    }

    return(
        <pre id="mydata">
            {JSON.stringify(fetchdata,null,4)}
        </pre>
    )
}