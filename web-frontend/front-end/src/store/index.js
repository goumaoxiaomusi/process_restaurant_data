import { configureStore } from "@reduxjs/toolkit"
import retaurantReducer from "./modules/restaurantStore"

const store = configureStore({
    reducer:{
        // Assigning the restaurantReducer to handle state for the 'restaurant' slice
        restaurant: retaurantReducer
    }
})

export default store
