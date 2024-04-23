import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

// Creating a Redux slice for handling restaurant data
const restaurantStore = createSlice({
        name: 'restaurant',
        initialState:{
            restaurantList: []
        },
        reducers:{
            // Reducer to update the restaurantList in the state
            setRestaurantList(state, action){
                state.restaurantList = action.payload
            }
        }
    }
)

// Destructuring to get the action creators from the slice
const {setRestaurantList} =restaurantStore.actions

// Async thunk function to fetch restaurant data from the server
const getRestaurantList = () => {
    return async (dispatch)=>{
        // Making an HTTP GET request to fetch restaurant data from the locally running backend
        const res = await axios.get('http://localhost:8080/restaurant/RM77EX')
        dispatch(setRestaurantList(res.data))
    }
}

// Exporting the thunk function to be used in components for dispatching
export {getRestaurantList}

// Getting the reducer associated with this slice and exporting it
const reducer = restaurantStore.reducer
export default reducer