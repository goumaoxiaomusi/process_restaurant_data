import Navigator from "./components/Navigator/nav"
import { useEffect, useMemo } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getRestaurantList } from "../../store/modules/restaurantStore"
import _ from 'lodash'

const Result = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRestaurantList())
    }, [dispatch])

    const restaurantList = useSelector(state => state.restaurant.restaurantList)
    const cuisineGroup = useMemo(()=>{
        return _.groupBy(restaurantList, (item) => item.rating)
    }, [restaurantList])
    console.log(cuisineGroup)
    // The result page needs:
    //1. put in all the elements that I constructed before

    //Function:
    //1. display only 10 result on one page
    //2. separate the content into different pages
    //3. connect the content of one page to its page number
    //4. display "there is no restaurants" if the list is empty
    //5. same function as the landing page for search bar here
    //6. click the picture go to the landing page
    //7. sort the items and render them based on their different attributes
    return (
        <Navigator></Navigator>
    )
}

export default Result