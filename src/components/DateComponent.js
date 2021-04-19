const getFormattedDate = () => {
    const dt = new Date()
    dt.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    dt.day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const todayFormatted = (formatDay(dt) + ', ' + shortMonths(dt) + ' ' + dt.getDate() + ', ' + dt.getFullYear())
    return todayFormatted
}
const formatDay = (dt) => { 
    return dt.day[dt.getDay()]; 
}
 
const shortMonths = (dt) => { 
     return dt.shortMonths[dt.getMonth()]; 
}

const DateComponent = () => {
    return (
        <div className='date'>
            <h2>{getFormattedDate()}</h2>
        </div>
    )
}

export default DateComponent
