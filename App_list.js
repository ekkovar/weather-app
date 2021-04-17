// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import moment from 'moment'
import Cityscape from './components/Cityscape'
import Location from './components/Location'
import DateComponent from './components/DateComponent'
import Forecast from './components/Forecast'
import { TiWeatherShower } from "react-icons/ti"
import { TiWeatherSnow } from "react-icons/ti"
import { TiWeatherStormy } from "react-icons/ti"
import { TiWeatherSunny } from "react-icons/ti"
import { TiWeatherWindyCloudy } from "react-icons/ti"
import { TiWeatherWindy } from "react-icons/ti"
import { TiWeatherCloudy } from "react-icons/ti"
import { TiWeatherDownpour } from "react-icons/ti"
import { TiWeatherPartlySunny } from "react-icons/ti"


function App() {
  const [apiState, setApiState] = useState([])
  const [apiWeather, setApiWeather] = useState([])
  const [showFarenheit, setShowFarenheit] = useState(true)
  const [location, setLocation] = useState([])
  const [weatherTemp, setWeatherTemp] = useState([])
  const [weatherDesc, setWeatherDesc] = useState([])
  const [weatherWind, setWeatherWind] = useState([])
  const [apiForecast, setApiForecast] = useState([])

  const [forecastOne, setForecastOne] = useState([])
  const [forecastOneImg, setForecastOneImg] = useState([])
  const [forecastTwoImg, setForecastTwoImg] = useState([])
  const [forecastThreeImg, setForecastThreeImg] = useState([])
  const [forecastFourImg, setForecastFourImg] = useState([])
  const [forecastFiveImg, setForecastFiveImg] = useState([])

  const [forecastList, setForecastList] = useState([])


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
      
      const daysList = [
        {
          id: 1,
          day: moment(forecastFromServer.list[2].dt_txt).format('ddd'),
          desc: forecastFromServer.list[2].weather[0].description,
          temp: forecastFromServer.list[2].main.temp_max,
          icon: forecastOneImg
        },
        {
          id: 2,
          day: moment(forecastFromServer.list[10].dt_txt).format('ddd'),
          desc: forecastFromServer.list[10].weather[0].description,          
          temp: forecastFromServer.list[10].main.temp_max,
          icon: forecastTwoImg
        },
        {
          id: 3,
          day: moment(forecastFromServer.list[18].dt_txt).format('ddd'),
          desc: forecastFromServer.list[18].weather[0].description,          
          temp: forecastFromServer.list[18].main.temp_max,
          icon: forecastThreeImg
        },
        {
          id: 4,
          day: moment(forecastFromServer.list[26].dt_txt).format('ddd'),
          desc: forecastFromServer.list[26].weather[0].description,          
          temp: forecastFromServer.list[26].main.temp_max,
          icon: forecastFourImg
        },
        {
          id: 5,
          day: moment(forecastFromServer.list[34].dt_txt).format('ddd'),
          desc: forecastFromServer.list[34].weather[0].description,          
          temp: forecastFromServer.list[34].main.temp_max,
          icon: forecastFiveImg
        }
      ]
        
      setForecastList(daysList)
      
      
      const updateForecastList = () => {
        const newForecastList = forecastList.map(forecast => {
          
          if (forecast.desc.includes("rain")) {
            const updatedForecast = {
              ...forecast,
              icon: <TiWeatherShower/>
            }
            return updatedForecast
          } 
          if (forecast.desc.includes("cloud")) {
            const updatedForecast = {
              ...forecast,
              icon: <TiWeatherCloudy/>
            }
            return updatedForecast
          } 
          
          return forecast
        })
        setForecastList(newForecastList)
      }
      updateForecastList()
      
      console.log(forecastFromServer.list[2].weather[0].description)

    }
    getForecast()

    const mappingForecast = () => {
      let newArry = []
      forecastList.map( d => {
        newArry.push(
          <div className='day'>
            {d.day}
          </div>
        )
        
      })
      setForecastOne(newArry)
    }

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
    const response = await fetch(url)
    const data = await response.json()

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
    const response = await fetch(url)
    const data = await response.json()

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
      <Forecast forecast={forecastList} />   

      <p>{forecastOne}</p>
        {/* {forecastList.map( (forecast, index) => 
          <div> 
            {forecast.day}
            {console.log(forecast.day)}
          </div>
        )} */}
        

      
      {showFarenheit ? ("FARENHEIT") : ("CELCIUS")}
      

    </div>
  );
}

export default App;
