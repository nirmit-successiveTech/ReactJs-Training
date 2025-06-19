import Tasklist from "@/components/tasklist";


export default function MyTask(){
    return(
        <>
        <h1 id="task-header">---Tasks--</h1>
        <Tasklist list={['eat','sleep','code','gym','food']}/>
        </>
    )
}