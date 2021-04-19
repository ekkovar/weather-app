const CurrentWeather = ({ temp, icon, desc, wind, windSpeed }) => {
    return (
        <div className='today'>
            <p className='temp'>{temp}<span>&deg;</span></p>
            <div className='icon'>{icon}</div>
            <div className='desc_container'>
                <p className='desc'>{desc}</p>
                <p className='wind'>
                    {wind} {windSpeed ? 'mph' : 'mps'}
                </p>
            </div>
            
        </div>
    )
}

export default CurrentWeather
