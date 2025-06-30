import { useMemo } from "react"

export default function EmployeeSalary(){
    const employee=[
        {
            name:'nirmit',
            salary:250000
        },
                {
            name:'ajay',
            salary:250000
        },
                {
            name:'alex',
            salary:250000
        },
                {
            name:'sam',
            salary:25
        },
                {
            name:'rocky',
            salary:250000
        },
        
    ]


    const salaryAvg = useMemo(()=>{
    let sum=0
    const avgSalary = employee.map((element,index)=>{
        sum = sum + employee[index].salary
    })
    return sum/employee.length;
    },[employee])

    return (
        <div>
            <div>hello</div>
            <div>{salaryAvg}</div>
        </div>
    )
}