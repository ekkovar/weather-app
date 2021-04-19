import { useState, useEffect } from 'react'
import moment from 'moment'
import Cityscape from './components/Cityscape'
import Location from './components/Location'
import DateComponent from './components/DateComponent'
import Forecast from './components/Forecast'
import Clouds from './components/Clouds'
import {TEST_FORECAST_DATA, TEST_WEATHER_DATA} from './TestData'

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
import axios from 'axios'

function App() {

    const USE_TEST_DATA = false

  const [apiState, setApiState] = useState([])
//   const [runApiCall, setRunApiCall] = useState(grabInfo = () => {})
  const [apiWeather, setApiWeather] = useState([])
  const [showFahrenheit, setShowFahrenheit] = useState(true)
  const [weatherTemp, setWeatherTemp] = useState([])
  const [weatherDesc, setWeatherDesc] = useState([])
  const [weatherWind, setWeatherWind] = useState([])
  const [weatherIcon, setWeatherIcon] = useState([])

  const [forecastLoading, setForecastLoading] = useState(false)
  const [forecastList, setForecastList] = useState([])

  const BASE_URL = 'http://api.openweathermap.org/data/2.5/'
  const axInstance = axios.create({baseURL: BASE_URL})


  useEffect(() => {
    const grabInfo = () => {
        const getWeather = async () => {
            try {
                const weatherFromServer = await fetchWeather()
              if (weatherFromServer) {
                // Test Weather Data from API
                // console.log(weatherFromServer)
                setApiWeather(weatherFromServer)
                const wDesc = weatherFromServer.weather[0].description
                const wMain = weatherFromServer.weather[0].main
                setWeatherTemp(Math.round(weatherFromServer.main.temp))
                setWeatherDesc(wDesc)
                setWeatherWind(Math.round(weatherFromServer.wind.speed))
                
                wMain.includes("Rain") && (
                    setWeatherIcon(() => {
                        const img = <TiWeatherDownpour/>
                        return img
                    })
                )
                wMain.includes("Drizzle") && (
                    setWeatherIcon(() => {
                        const img = <TiWeatherShower/>
                        return img
                    })
                )
                wMain.includes("Thunderstorm") && (
                    setWeatherIcon(() => {
                        const img = <TiWeatherStormy/>
                        return img
                    })


                )
                wMain.includes("Clear") && (
                    setWeatherIcon(() => {
                        const img = <TiWeatherSunny/>
                        return img
                    })
                )
                wMain.includes("Tornado") && (
                    setWeatherIcon(() => {
                        const img = <WiTornado/>
                        return img
                      })
                )
                wMain.includes("Snow") && (
                    setWeatherIcon(() => {
                        const img = <TiWeatherSnow />
                        return img
                    })
                )
                (wDesc.includes("freezing rain") && wMain.includes("Rain")) && (
                    setWeatherIcon(() => {
                        const img = <TiWeatherSnow />
                        return img
                    })

                )
                ((wDesc.includes("overcast clouds") && wMain.includes("Clouds")) || 
                    (wDesc.includes("broken clouds") && wMain.includes("Clouds")) ) && (
                        setWeatherIcon(() => {
                            const img = <TiWeatherCloudy />
                            return img
                        })

                )
                ((wDesc.includes("scattered clouds") && wMain.includes("Clouds")) || 
                    (wDesc.includes("few clouds") && wMain.includes("Clouds")) ) && (
                        setWeatherIcon(() => {
                            const img = <TiWeatherPartlySunny />
                            return img
                        })
                )
                (wMain.includes("Dust") || 
                wMain.includes("Mist") || 
                wMain.includes("Haze") || 
                wMain.includes("Fog") || 
                wMain.includes("Ash") || 
                wMain.includes("Smoke") || 
                wMain.includes("Sand")) && (
                    <RiMistFill/>

                )
              }
            }
            catch(error) {
              setApiState({errorMessage: error.message})
              console.log('There was an error - ', error)
            }
      
          }
          getWeather()
      
      
          let mounted = true
          setForecastLoading(true)
          const getForecast = async () => {
              try {
                const forecastFromServer = await fetchForecast()
                if (forecastFromServer) {

                  if (mounted) {
                    setForecastLoading(false)

                    // Leaving the following console for testing server connection
                    // console.log('forecast from server ' + forecastFromServer)
                    
                    const daysList = [
                      {
                        id: 1,
                        day: moment(forecastFromServer.list[2].dt_txt).format('ddd'),
                        desc: forecastFromServer.list[2].weather[0].description,
                        temp: forecastFromServer.list[2].main.temp_max,
                        main: forecastFromServer.list[2].weather[0].main
                      },
                      {
                        id: 2,
                        day: moment(forecastFromServer.list[10].dt_txt).format('ddd'),
                        desc: forecastFromServer.list[10].weather[0].description,          
                        temp: forecastFromServer.list[10].main.temp_max,
                        main: forecastFromServer.list[10].weather[0].main
                      },
                      {
                        id: 3,
                        day: moment(forecastFromServer.list[18].dt_txt).format('ddd'),
                        desc: forecastFromServer.list[18].weather[0].description,          
                        temp: forecastFromServer.list[18].main.temp_max,
                        main: forecastFromServer.list[18].weather[0].main
                      },
                      {
                        id: 4,
                        day: moment(forecastFromServer.list[26].dt_txt).format('ddd'),
                        desc: forecastFromServer.list[26].weather[0].description,          
                        temp: forecastFromServer.list[26].main.temp_max,
                        main: forecastFromServer.list[26].weather[0].main
                      },
                      {
                        id: 5,
                        day: moment(forecastFromServer.list[34].dt_txt).format('ddd'),
                        desc: forecastFromServer.list[34].weather[0].description,          
                        temp: forecastFromServer.list[34].main.temp_max,
                        main: forecastFromServer.list[34].weather[0].main
                      }
                    ]
                    // Test Days List output
                    // console.log(daysList)
                    setForecastList(daysList)
                    
                  }
                }
              }
              catch (error) {
                setApiState({errorMessage: error.message})
                console.log('There was an error - ', error)
              }
          }
          getForecast()
    }
    grabInfo()
  }, [showFahrenheit])

  const formatLocation = () => {
    const city = 'Dallas'
    const state = 'TX'
    const country = 'USA'
    return 'q=' + city + ',' + state + ',' + country
  }

  const formatZip = () => {
    const zip = '75001'
    return '&zip=' + zip
  }
  
  const formatUnits = () => {
    let units = 'imperial'
    showFahrenheit ? (
      units = 'imperial'
    ) : (
      units = 'metric'
    )
    return '&units=' + units
  }

  const formatUrlWeather = () => {
    const type = 'weather?'
    const location = formatLocation()
    const zip = formatZip()
    const appId = '&appid=e646dda1e4dd26c9ba07acc84bb8c9a5'
    const units = formatUnits()
    const shortUrl = type.concat(location, zip, appId ,units)

    return shortUrl
  }
  
  const fetchWeather = async () => {
    let response = null
    if (!USE_TEST_DATA) {
        // Testing Current Data
        // console.log("Fetching Current Weather Data")
        const url = formatUrlWeather()
        try {
            // Testing Current Data
            // console.log(url)
            response = await axInstance('/' + url)
        }
        catch (error) {
            console.log("Failed to fetch weather: ", error)
            console.log(response)
        }
    }
    else {
        // Testing Test Data
        // console.log("Using Test Weather Data")
        response = TEST_WEATHER_DATA
        // Testing Test Data
        // console.log(response)
    }
    // Testing result of api/test data call
    // if (response) {
    //     console.log(response)
    // }

    return response.data
  }

  const formatUrlForecast = () => {
    const type = 'forecast?'
    const location = formatLocation()
    const zip = formatZip()
    const appId = '&appid=e646dda1e4dd26c9ba07acc84bb8c9a5'
    const units = formatUnits()
    const shortUrl = type.concat(location, zip, appId ,units)
    return shortUrl
  }

  const fetchForecast = async () => {
    let response = null
    if (!USE_TEST_DATA) {
        // Testing with api data
        // console.log("Fetching Current Weather Forecast")
        const url = formatUrlForecast()
        try {
        response = await axInstance('/' + url)
        }
        catch {
        console.log("Failed to fetch forecast")
        }
    }
    else {
        // Testing Test Data
        // console.log("Using Test Forecast Data")
      response = TEST_FORECAST_DATA
    }
    
    // Testing result of api/test data call
    // if (response) {
    //     console.log(response)
    // }
    return response.data
  }


  return (
    <div className='outer_container'>
        <Clouds />
        <div className='container'>
            <Location />
            <DateComponent />
            {(typeof apiWeather != 'undefined') ? (

                <Cityscape setFahrenheit={showFahrenheit} 
                changeUnit={ () => 
                    setShowFahrenheit(!showFahrenheit) 
                }
                showTemp={weatherTemp}
                showDesc={weatherDesc}
                showWind={weatherWind}
                showIcon={weatherIcon}
                />  
                ) : (
                <div>No weather to show</div>
            )}
        
            <Forecast 
            forecast={forecastList} 
            loading={forecastLoading}
            />
        
        </div>
    </div>
  )
}

export default App;
