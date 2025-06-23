import Weather from "@/components/Weather";


export default function DisplayWeather(){
    return(
        <div className="parent-weather">
            <div className="child-weather">
        <Weather temperature={30} />
        <Weather temperature={25} />
        <Weather temperature={19} />
            </div>

        </div>

    )
}