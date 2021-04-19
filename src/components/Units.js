const Units = ({changeUnit, setFahrenheit}) => {
    return (
        <div className='units'>
            <label className='switch'>
                    <input type='checkbox' onChange={changeUnit} defaultChecked={setFahrenheit}/>
                    
                    <span className='slider round'>
                        <span>C<sup>&deg;</sup></span>
                        <span>F<sup>&deg;</sup></span>
                    </span>
            </label>
        </div>
    )
}

export default Units
