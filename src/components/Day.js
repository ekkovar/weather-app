import { TiWeatherShower, 
    TiWeatherSnow, 
    TiWeatherStormy, 
    TiWeatherSunny, 
    TiWeatherCloudy,
    TiWeatherDownpour,
    TiWeatherPartlySunny
  } from "react-icons/ti"
import { WiTornado } from "react-icons/wi"
import { RiMistFill } from "react-icons/ri"
  
const Day = ({ day, temp, desc, main }) => {
    return (
        <div className='singleForecast'>
            <div>
                <h3>{day}</h3>
                <p className='icon'>
                    
                    {main.includes("Rain") && (
                        <TiWeatherDownpour/>
 
                    )}
                    {main.includes("Drizzle") && (
                        <TiWeatherShower/>
 
                    )}
                    {main.includes("Thunderstorm") && (
                        <TiWeatherStormy/>
 
                    )}
                    {main.includes("Clear") && (
                        <TiWeatherSunny/>
   
                    )}
                    {main.includes("Tornado") && (
                        <WiTornado/>
   
                    )}
                    {main.includes("Snow") && (
                        <TiWeatherSnow/>
   
                    )}
                    {(desc.includes("freezing rain") && main.includes("Rain")) && (
                        <TiWeatherSnow/>
  
                    )}
                    {((desc.includes("overcast clouds") && main.includes("Clouds")) || 
                        (desc.includes("broken clouds") && main.includes("Clouds")) ) && (
                        <TiWeatherCloudy/>
  
                    )}
                    {((desc.includes("scattered clouds") && main.includes("Clouds")) || 
                        (desc.includes("few clouds") && main.includes("Clouds")) ) && (
                            <TiWeatherPartlySunny/>
                    )}
                    {(main.includes("Dust") || 
                    main.includes("Mist") || 
                    main.includes("Haze") || 
                    main.includes("Fog") || 
                    main.includes("Ash") || 
                    main.includes("Smoke") || 
                    main.includes("Sand")) && (
                        <RiMistFill/>
   
                    )}

                </p>
                <p className='temp'>{Math.round(temp)}<span>&deg;</span></p>
            </div>

        </div>
    )
}

export default Day
