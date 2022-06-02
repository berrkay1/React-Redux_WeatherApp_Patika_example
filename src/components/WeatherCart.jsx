import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {fetchWeatherApi} from '../redux/weatherSlice';

function WeatherCart({cityValue}) {

    const dispatch = useDispatch();
    const items = useSelector(state => state.weather.items);

    

    useEffect(()=>{
        dispatch(fetchWeatherApi(cityValue))
        
    },[cityValue,dispatch])

    console.log(items);

    
  return (
    <div>
        <h1>{cityValue}</h1>
        <div className="infos">
        
        
        </div>
    </div>
  )
}

export default WeatherCart