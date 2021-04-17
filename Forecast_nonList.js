import { TiWeatherCloudy } from "react-icons/ti"
import { TiWeatherDownpour } from "react-icons/ti"
import { TiWeatherPartlySunny } from "react-icons/ti"
import { TiWeatherShower } from "react-icons/ti"
import { TiWeatherSnow } from "react-icons/ti"
import { TiWeatherStormy } from "react-icons/ti"
import { TiWeatherSunny } from "react-icons/ti"
import { TiWeatherWindyCloudy } from "react-icons/ti"
import { TiWeatherWindy } from "react-icons/ti"

const Forecast = ({ oneDay, twoDay, threeDay, fourDay, fiveDay, oneImg, twoImg, threeImg, fourImg, fiveImg }) => {
    return (
        <div className='forecast'>
            <div className='day one'>
                {oneDay}
                {oneImg}
            </div>
            <div className='day two'>
                {twoDay}
                {twoImg}
            </div>
            <div className='day three'>
                {threeDay}
                {threeImg}
            </div>
            <div className='day four'>
                {fourDay}
                {fourImg}
            </div>
            <div className='day five'>
                {fiveDay}
                {fiveImg}
            </div>
        </div>
    )
}

export default Forecast
