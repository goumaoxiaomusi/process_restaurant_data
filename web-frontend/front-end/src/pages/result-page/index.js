import Navigator from "./components/Navigator/nav"
import Search from "./components/Search/search"
import Item from "./components/Item/item"
import { useEffect,useState} from "react"
import {Container, Stack} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { getRestaurantList } from "../../store/modules/restaurantStore"
import { Outlet } from "react-router-dom"

    //Function:
    //3. connect the content of one page to its page number
    //4. display "there is no restaurants" if the list is empty
    //5. same function as the landing page for search bar here
    //6. click the picture go to the landing page
    //7. sort the items and render them based on their different attributes
const Result = () => {
    const dispatch = useDispatch()
    const restaurantList = useSelector(state => state.restaurant.restaurantList);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const ITEMS_PER_PAGE = 10

    useEffect(()=>{
        dispatch(getRestaurantList())
    }, [dispatch])

    useEffect(() => {
        if (restaurantList.length > 0) {
          setTotalPages(Math.ceil(restaurantList.length / ITEMS_PER_PAGE));
        }
      }, [restaurantList]);

    console.log("Hello")

    const currentPageData = restaurantList.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    
    const changePage = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
          setCurrentPage(newPage);
        }
    };

    const firstHalf = currentPageData.slice(0, 5);
    const secondHalf = currentPageData.slice(5, 10);
    // console.log(currentPageData[0])


    return (
        <div className="result-page">
            <Container>
                <Outlet /> 
            </Container>
            
            <Navigator></Navigator>

            <Search />

            <Stack direction="horizontal" gap={3}>
                <Stack>
                    <Item firstPart={firstHalf}></Item>
                </Stack>
                <Stack>
                    <Item secondPart={secondHalf}></Item> 
                </Stack>
            </Stack>

        </div>
        
    )
}

export default Result