import Units from './Units'
import CurrentWeather from './CurrentWeather'

const Cityscape = ({showTemp, showDesc, showWind, showIcon, setFahrenheit, changeUnit}) => {
    
    return (
        <div className='cityscape'>
            
            <Units changeUnit={changeUnit} setFahrenheit={setFahrenheit} />
            <CurrentWeather temp={showTemp} icon={showIcon} desc={showDesc} wind={showWind} windSpeed={setFahrenheit}/>
            
        </div>
    )
}

export default Cityscape
