// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import moment from 'moment'
import Cityscape from './components/Cityscape'
import Location from './components/Location'
import DateComponent from './components/DateComponent'
import Forecast from './components/Forecast'
import { TiWeatherCloudy } from "react-icons/ti"
import { TiWeatherDownpour } from "react-icons/ti"
import { TiWeatherPartlySunny } from "react-icons/ti"
import { TiWeatherShower } from "react-icons/ti"
import { TiWeatherSnow } from "react-icons/ti"
import { TiWeatherStormy } from "react-icons/ti"
import { TiWeatherSunny } from "react-icons/ti"
import { TiWeatherWindyCloudy } from "react-icons/ti"
import { TiWeatherWindy } from "react-icons/ti"

function App() {
  const [apiState, setApiState] = useState([])
  const [apiWeather, setApiWeather] = useState([])
  const [showFarenheit, setShowFarenheit] = useState(true)
  const [location, setLocation] = useState([])
  const [weatherTemp, setWeatherTemp] = useState([])
  const [weatherDesc, setWeatherDesc] = useState([])
  const [weatherWind, setWeatherWind] = useState([])
  const [apiForecast, setApiForecast] = useState([])
  const [forecastOneDay, setForecastOneDay] = useState([])
  const [forecastTwoDay, setForecastTwoDay] = useState([])
  const [forecastThreeDay, setForecastThreeDay] = useState([])
  const [forecastFourDay, setForecastFourDay] = useState([])
  const [forecastFiveDay, setForecastFiveDay] = useState([])
  const [forecastOneDesc, setForecastOneDesc] = useState([])
  const [forecastTwoDesc, setForecastTwoDesc] = useState([])
  const [forecastThreeDesc, setForecastThreeDesc] = useState([])
  const [forecastFourDesc, setForecastFourDesc] = useState([])
  const [forecastFiveDesc, setForecastFiveDesc] = useState([])
  const [forecastOneImg, setForecastOneImg] = useState([])
  const [forecastTwoImg, setForecastTwoImg] = useState([])
  const [forecastThreeImg, setForecastThreeImg] = useState([])
  const [forecastFourImg, setForecastFourImg] = useState([])
  const [forecastFiveImg, setForecastFiveImg] = useState([])

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    const getWeather = async () => {
      const weatherFromServer = await fetchWeather()
      setApiWeather(weatherFromServer)
      setWeatherTemp(weatherFromServer.main.temp)
      setWeatherDesc(weatherFromServer.weather[0].description)
      setWeatherWind(weatherFromServer.wind.speed)
    }
    getWeather()

    const getForecast = async () => {
      const forecastFromServer = await fetchForecast()
      setApiForecast(forecastFromServer)
      // Day of the week
      setForecastOneDay(moment(forecastFromServer.list[2].dt_txt).format('ddd'))
      setForecastTwoDay(moment(forecastFromServer.list[10].dt_txt).format('ddd'))
      setForecastThreeDay(moment(forecastFromServer.list[18].dt_txt).format('ddd'))
      setForecastFourDay(moment(forecastFromServer.list[26].dt_txt).format('ddd'))
      setForecastFiveDay(moment(forecastFromServer.list[34].dt_txt).format('ddd'))
      
      //Desc of forecast for day of the week
      setForecastOneDesc(forecastFromServer.list[2].weather[0].description)
      setForecastTwoDesc(forecastFromServer.list[10].weather[0].description)
      setForecastThreeDesc(forecastFromServer.list[18].weather[0].description)
      setForecastFourDesc(forecastFromServer.list[26].weather[0].description)
      setForecastFiveDesc(forecastFromServer.list[34].weather[0].description)
      
      const forecastDescs = [
        forecastOneDesc,
        forecastTwoDesc,
        forecastThreeDesc,
        forecastFourDesc,
        forecastFiveDesc
      ]
      //First day of forecast
      forecastOneDesc.includes("shower rain") && (
        setForecastOneImg(() => {
          const img = <TiWeatherShower/>
          return img
          })
        )
      forecastOneDesc.includes("rain") && (
        setForecastOneImg(() => {
          const img = <TiWeatherDownpour/>
          return img
          })
        )
      forecastOneDesc.includes("clouds") && (
        setForecastOneImg(() => {
          const img = <TiWeatherCloudy/>
          return img
        })
      )
      
      forecastOneDesc.includes("snow") && (
        setForecastOneImg(() => {
          const img = <TiWeatherSnow/>
          return img
        })
      )
      forecastOneDesc.includes("wind") && (
        setForecastOneImg(() => {
          const img = <TiWeatherWindy/>
          return img
        })
      )
      forecastOneDesc.includes("clear sky") && (
        setForecastOneImg(() => {
          const img = <TiWeatherSunny/>
          return img
        })
      )
      forecastOneDesc.includes("few clouds") && (
        setForecastOneImg(() => {
          const img = <TiWeatherPartlySunny/>
          return img
        })
      )
      
      // if (forecastOneDesc.includes("wind") && forecastOneDesc.includes("clouds")){
      //   setForecastOneImg(() => {
      //     const img = <TiWeatherWindyCloudy />
      //     return img
      //   })
      // }

      // forecastOneDesc.includes("thunderstorm") && (
      //   setForecastOneImg(() => {
      //     const img = <TiWeatherStormy/>
      //     return img
      //   })
      // )
      // //Second day of forecast
      // forecastTwoDesc.includes("shower rain") && (
      //   setForecastTwoImg(() => {
      //     const img = <TiWeatherShower/>
      //     return img
      //     })
      //   )
      // forecastTwoDesc.includes("rain") && (
      //   setForecastTwoImg(() => {
      //     const img = <TiWeatherDownpour/>
      //     return img
      //     })
      //   )
      // forecastTwoDesc.includes("clouds") && (
      //   setForecastTwoImg(() => {
      //     const img = <TiWeatherCloudy/>
      //     return img
      //   })
      // )
      // forecastTwoDesc.includes("thunderstorm") && (
      //   setForecastTwoImg(() => {
      //     const img = <TiWeatherStormy/>
      //     return img
      //   })
      // )
      // forecastTwoDesc.includes("snow") && (
      //   setForecastTwoImg(() => {
      //     const img = <TiWeatherSnow/>
      //     return img
      //   })
      // )
      // forecastTwoDesc.includes("wind") && (
      //   setForecastTwoImg(() => {
      //     const img = <TiWeatherWindy/>
      //     return img
      //   })
      // )
      // if (forecastTwoDesc.includes("sun") || forecastTwoDesc.includes("clear sky")) {
      //   setForecastTwoImg(() => {
      //     const img = <TiWeatherSunny/>
      //     return img
      //   })
      // } 
      // if (forecastTwoDesc.includes("wind") && forecastTwoDesc.includes("clouds")){
      //   setForecastTwoImg(() => {
      //     const img = <TiWeatherWindyCloudy />
      //     return img
      //   })
      // }   
      // //Third day of forecast
      // forecastThreeDesc.includes("shower rain") && (
      //   setForecastThreeImg(() => {
      //     const img = <TiWeatherShower/>
      //     return img
      //     })
      //   )
      // forecastThreeDesc.includes("rain") && (
      //   setForecastThreeImg(() => {
      //     const img = <TiWeatherDownpour/>
      //     return img
      //     })
      //   )
      // forecastThreeDesc.includes("clouds") && (
      //   setForecastThreeImg(() => {
      //     const img = <TiWeatherCloudy/>
      //     return img
      //   })
      // )
      // forecastThreeDesc.includes("thunderstorm") && (
      //   setForecastThreeImg(() => {
      //     const img = <TiWeatherStormy/>
      //     return img
      //   })
      // )
      // forecastThreeDesc.includes("snow") && (
      //   setForecastThreeImg(() => {
      //     const img = <TiWeatherSnow/>
      //     return img
      //   })
      // )
      // forecastThreeDesc.includes("wind") && (
      //   setForecastThreeImg(() => {
      //     const img = <TiWeatherWindy/>
      //     return img
      //   })
      // )
      // if (forecastThreeDesc.includes("sun") || forecastThreeDesc.includes("clear sky")) {
      //   setForecastThreeImg(() => {
      //     const img = <TiWeatherSunny/>
      //     return img
      //   })
      // } 
      // if (forecastThreeDesc.includes("wind") && forecastThreeDesc.includes("clouds")){
      //   setForecastThreeImg(() => {
      //     const img = <TiWeatherWindyCloudy />
      //     return img
      //   })
      // }

      // //Four day of forecast
      // forecastFourDesc.includes("shower rain") && (
      //   setForecastFourImg(() => {
      //     const img = <TiWeatherShower/>
      //     return img
      //     })
      //   )
      // forecastFourDesc.includes("rain") && (
      //   setForecastFourImg(() => {
      //     const img = <TiWeatherDownpour/>
      //     return img
      //     })
      //   )
      // forecastFourDesc.includes("clouds") && (
      //   setForecastFourImg(() => {
      //     const img = <TiWeatherCloudy/>
      //     return img
      //   })
      // )
      // forecastFourDesc.includes("thunderstorm") && (
      //   setForecastFourImg(() => {
      //     const img = <TiWeatherStormy/>
      //     return img
      //   })
      // )
      // forecastFourDesc.includes("snow") && (
      //   setForecastFourImg(() => {
      //     const img = <TiWeatherSnow/>
      //     return img
      //   })
      // )
      // forecastFourDesc.includes("wind") && (
      //   setForecastFourImg(() => {
      //     const img = <TiWeatherWindy/>
      //     return img
      //   })
      // )
      // if (forecastFourDesc.includes("sun") || forecastFourDesc.includes("clear sky")) {
      //   setForecastFourImg(() => {
      //     const img = <TiWeatherSunny/>
      //     return img
      //   })
      // } 
      // if (forecastFourDesc.includes("wind") && forecastFourDesc.includes("clouds")){
      //   setForecastFourImg(() => {
      //     const img = <TiWeatherWindyCloudy />
      //     return img
      //   })
      // }

      // //Fifth day of forecast
      // forecastFiveDesc.includes("shower rain") && (
      //   setForecastFiveImg(() => {
      //     const img = <TiWeatherShower/>
      //     return img
      //     })
      //   )
      // forecastFiveDesc.includes("rain") && (
      //   setForecastFiveImg(() => {
      //     const img = <TiWeatherDownpour/>
      //     return img
      //     })
      //   )
      // forecastFiveDesc.includes("clouds") && (
      //   setForecastFiveImg(() => {
      //     const img = <TiWeatherCloudy/>
      //     return img
      //   })
      // )
      // forecastFiveDesc.includes("thunderstorm") && (
      //   setForecastFiveImg(() => {
      //     const img = <TiWeatherStormy/>
      //     return img
      //   })
      // )
      // forecastFiveDesc.includes("snow") && (
      //   setForecastFiveImg(() => {
      //     const img = <TiWeatherSnow/>
      //     return img
      //   })
      // )
      // forecastFiveDesc.includes("wind") && (
      //   setForecastFiveImg(() => {
      //     const img = <TiWeatherWindy/>
      //     return img
      //   })
      // )
      // if (forecastFiveDesc.includes("sun") || forecastFiveDesc.includes("clear sky")) {
      //   setForecastFiveImg(() => {
      //     const img = <TiWeatherSunny/>
      //     return img
      //   })
      // } 
      // if (forecastFiveDesc.includes("wind") && forecastFiveDesc.includes("clouds")){
      //   setForecastFiveImg(() => {
      //     const img = <TiWeatherWindyCloudy />
      //     return img
      //   })
      // }






    }
    getForecast()

  }, [setApiState])

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
    showFarenheit ? (
      units = 'imperial'
    ) : (
      units = 'standard'
    )
    return '&units=' + units
  }

  const formatUrlWeather = () => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/'
    const type = 'weather?'
    const location = formatLocation()
    const zip = formatZip()
    const appId = '&appid=e646dda1e4dd26c9ba07acc84bb8c9a5'
    const units = formatUnits()
    const url = baseURL.concat(type, location, zip, appId ,units)
    return url
  }
  // setApiState({ loading: true })
  
  const fetchWeather = async () => {
    
    const url = formatUrlWeather()
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    // setApiState(json.data);
    return data
  }

  const formatUrlForecast = () => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/'
    const type = 'forecast?'
    const location = formatLocation()
    const zip = formatZip()
    const appId = '&appid=e646dda1e4dd26c9ba07acc84bb8c9a5'
    const units = formatUnits()
    const url = baseURL.concat(type, location, zip, appId ,units)
    return url
  }
  // setApiState({ loading: true })
  
  const fetchForecast = async () => {
    const url = formatUrlForecast()
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    // setApiState(json.data);
    return data
  }
  

    
  
  
  return (
    <div className="container">
      <Location />
      <DateComponent />
      <Cityscape setFarenheit={showFarenheit} 
        changeUnit={ () => setShowFarenheit(!showFarenheit) }
        showTemp={weatherTemp}
        showDesc={weatherDesc}
        showWind={weatherWind}
      />
      <Forecast 
        oneDay={forecastOneDay}
        twoDay={forecastTwoDay}
        threeDay={forecastThreeDay}
        fourDay={forecastFourDay}
        fiveDay={forecastFiveDay}
        oneImg={forecastOneImg}
      />
      {showFarenheit ? ("FARENHEIT") : ("CELCIUS")}
      {forecastThreeDay}
    </div>
  );
}

export default App;
