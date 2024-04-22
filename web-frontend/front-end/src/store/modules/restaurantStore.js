import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

const restaurantStore = createSlice({
        name: 'restaurant',
        initialState:{
            restaurantList: []
        },
        reducers:{
            setRestaurantList(state, action){
                state.restaurantList = action.payload
            }
        }
    }
)

const {setRestaurantList} =restaurantStore.actions
const getRestaurantList = () => {
    return async (dispatch)=>{
        const res = await axios.get('http://localhost:8080/restaurant/RM77EX')
        dispatch(setRestaurantList(res.data))
    }
}
export {getRestaurantList}
const reducer = restaurantStore.reducer
export default reducer