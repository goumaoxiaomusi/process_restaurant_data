import { configureStore } from "@reduxjs/toolkit"
import retaurantReducer from "./modules/restaurantStore"

const store = configureStore({
    reducer:{
        restaurant: retaurantReducer
    }
})

export default store
