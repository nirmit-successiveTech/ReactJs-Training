import DumbButton from "@/components/DumbButton";

export default function Question12(){
    return(
        <div style={{margin:'auto',display:'flex',flexDirection:'column',gap:'30px',width:'400px',textAlign:'center'}}>
            <DumbButton color={'primary'}/>
            <DumbButton color={'secondary'}/>
            <DumbButton color={'danger'}/>
            <DumbButton color={'warning'}/>
        </div>
    )
}