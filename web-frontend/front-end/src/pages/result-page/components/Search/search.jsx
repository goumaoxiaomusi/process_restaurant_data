import React, { useState,useMemo,useSelector } from "react"
import {Button,Form, Stack} from 'react-bootstrap'
import "./search.css"
import _ from 'lodash'

// When entered a postcode that is not UK postcode then does not allow the API request go through
export default function Search(){
    
    // This part can be used to alert when the postcode is not valid
    const handleClick = (postcode) => {
        console.log("Try to submit a postcode: ", postcode)
    }
    const[postcode, setPostcode] = useState('')

    // 1. onclick for the form.select we have to submit the data and give it back to the result-page and then renders the result in the items

    //2. parent element has to pass down the corresponding rating list and cuisine list(if I have time)
    // const [cuisineValue, setCuisineValue] = useState('')
    // const [rating, setRating] = useState('')
    // const [currentCuisineList, setCurrentCuisineList] = useState([])
    // const [currentRatingList, setCurrentRatingList] = useState([])

    // //key: rating
    // const restaurantList = useSelector(state => state.restaurant.restaurantList)
    // const ratingGroup = useMemo(()=>{
    //     return _.groupBy(restaurantList, (item) => item.rating.starRating)
    // }, [restaurantList])

    // //key: name of the cuisine
    // const cuisineGroup = useMemo(()=>{
    //     return _.groupBy(restaurantList, (item) => item.cuisines.name)
    // }, [restaurantList])

//    const handleCuisine = () => {
//         (e) =>setCuisineValue(e.target.value)
//         setCurrentCuisineList(cuisineGroup[cuisineValue])
//     }

//     const handleRating = () => {
//         (e) =>setRating(e.target.value)
//         setCurrentRatingList(ratingGroup[rating])
//     }

    //3. need to declare something to use the cuisineValue here in the parent
    //4. need to pass the rating value back to the parent

    return (
        <>
            <Stack direction="horizontal" gap={2} className="right-aligned-stack">
                <Form.Select className="custom-select" aria-label="select cuisines" 
                >
                    <option value="1">Pizza</option>
                </Form.Select>

                <Form.Select className="custom-select" aria-label="select rating ranges" >
                    <option>Rating Range</option>
                    <option value="1">4.8-5.0</option>
                    <option value="2">4.5-4.8</option>
                    <option value="2">4.0-4.5</option>
                    <option value="2">Below 4.0</option>
                </Form.Select>

                <Form>
                    <Form.Control
                        className="custom-control"
                        placeholder="Search by Postcode"
                        value={postcode} 
                        onChange={(e) => setPostcode(e.target.value)} 
                        type="text"
                    />
                </Form>
                <Button className="custom-button" onClick={() => handleClick("EACK34")}>Search</Button>
            </Stack>
        </>
        
   )
    
}