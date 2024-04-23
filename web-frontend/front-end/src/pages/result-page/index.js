import Navigator from "./components/Navigator/nav"
import Item from "./components/Item/item"
import { useEffect} from "react"
import {Container, Stack} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { getRestaurantList } from "../../store/modules/restaurantStore"
import { Outlet } from "react-router-dom"

const Result = () => {
    const dispatch = useDispatch()
    const restaurantList = useSelector(state => state.restaurant.restaurantList);

    useEffect(()=>{
        dispatch(getRestaurantList())
    }, [dispatch])

    const firstHalf = restaurantList.slice(0, 5);
    const secondHalf = restaurantList.slice(5, 10);

    return (
        <div className="result-page">
            <Container>
                <Outlet /> 
            </Container>
            
            <Navigator></Navigator>

            <Stack direction="horizontal" gap={1} style={{ marginTop: '1.5rem'}}>
                <Stack style={{ marginLeft: '4rem'}}>
                    <Item firstPart={firstHalf}></Item>
                </Stack>
                <Stack style={{ marginRight: '4rem'}}>
                    <Item secondPart={secondHalf}></Item> 
                </Stack>
            </Stack>

        </div>
        
    )
}

export default Result