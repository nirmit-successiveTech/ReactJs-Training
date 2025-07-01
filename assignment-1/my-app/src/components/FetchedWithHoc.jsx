"use client";

import withDataFetching from "@/app/day-5/hoc/withDataFetching";



function FetchedWithHoc({mydata}){
    return(
    <div>
        {mydata.map((item,index)=>(
            <div key={index}>{item.name}</div>
        ))}
    </div>
    )

}

const TryHoc = withDataFetching(FetchedWithHoc);
export default TryHoc;