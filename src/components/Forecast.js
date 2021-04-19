import Day from './Day'
import { TiWeatherStormy } from "react-icons/ti"


const Forecast = ({ forecast, loading }) => {

    return (
        <div className='forecast'>
            {(!loading) ? (
                forecast.map((dayForecast) => (forecast) ? <Day key={
                    dayForecast.id}
                    day={dayForecast.day}
                    temp={dayForecast.temp}
                    main={dayForecast.main}
                    desc={dayForecast.desc} /> : 'No Forecast' )
             
            ) : (
                <div className='no_forecast'>
                    <p className='loading_icon'><TiWeatherStormy /></p>
                    <p className='error_msg'>Fetching the forecast</p>
                </div>
            )}
            
        </div>
    )
}

export default Forecast
