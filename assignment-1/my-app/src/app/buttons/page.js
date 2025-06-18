import Styler from "../components/buttonstyle";

export default function ShowButton(){
    return(
        <>
        <div className="button-wrapper">
        <Styler color={'green'} text={'Click Me'} />
        <Styler color={'blue'} text={'User'} />   
        <Styler color={'red'} text={'Alert'} />   
        </div>

        </>

    )
}