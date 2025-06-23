// import Styler from "@/components/buttonstyle";

import Styler from "@/components/ButtonDesign";


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