  "use client"
  import { useState } from "react"

  export default function Question8() {
    const [celcius, setcelcius] = useState();
    const [fahrenheit, setfahrenheit] = useState();
    const [temperature, settemperature] = useState();
    const [temp, settemp] = useState();

    const FindFahrenheit = () => {
      settemperature(((celcius * 9) / 5) + 32);
    };

    const FindCelcius = () => {
      settemp(((fahrenheit - 32) * 5) / 9);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '10%',
          gap: '15px',
        }}
      >
        <input
          type="number"
          style={{border:'solid 2px black'}}
          placeholder="Enter the temperature in Celcius"
          onChange={(e) => setcelcius(e.target.value)}
        />
        <button onClick={FindFahrenheit}>Fahrenheit</button>
        <div>{temperature}</div>

        <input
          type="number"
          placeholder="Enter the temperature in Fahrenheit"
          onChange={(e) => setfahrenheit(e.target.value)}
        />
        <button onClick={FindCelcius}>Celcius</button>
        <div>{temp}</div>
      </div>
    );
  }
