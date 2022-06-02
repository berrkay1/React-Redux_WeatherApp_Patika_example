import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


    export const fetchWeatherApi = createAsyncThunk('weather/fetchWeatherApi',async(country) =>{
    const apiKey = '2aef913f2915e1caef07694d97e91e12'
     const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`)

     return res.data
 } )

    export const fetchCountriesApi = createAsyncThunk('countries/fetchCountriesApi', async()=> {
        const res = await axios.get('https://restcountries.com/v2/all')
        return res.data
    })

const weatherSlice = createSlice({
    name:'weather',
    initialState:{
        items:[],
        citys:[]
    },
    extraReducers:{
        [fetchWeatherApi.fulfilled]: (state,action) => {
            state.items = action.payload;
        },
        [fetchCountriesApi.fulfilled] : (state,action) => {
            state.citys = action.payload;
        },
    }
})

export default weatherSlice.reducer;