import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountriesApi } from '../redux/weatherSlice';
import WeatherCart from './WeatherCart';
function CityInput() {

    const [value, setValue] = useState();

    const dispatch = useDispatch();
    const Citys = useSelector(state => state.weather.citys);


    useEffect(() => {
        dispatch(fetchCountriesApi())
    }, [])

    return (
        <div>
            <form>

                <select value={value} onChange={(e) => setValue(e.target.value)} className="custom-select custom-select-lg mb-3">
                    <option selected>Country</option>
                    {Citys.map((item, index) => (
                        <option key={index} value={item.name} >{item.name}</option>
                    ))}

                    
                </select>
            </form>

            <WeatherCart cityValue={value}/>
        </div>
    )
}

export default CityInput