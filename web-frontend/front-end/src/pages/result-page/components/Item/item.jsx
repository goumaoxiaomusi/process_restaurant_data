import React from "react"
import {Badge,Row,Col,Stack} from "react-bootstrap"
import "./item.css"

/*
This is an Item component.The fuction Item receive 5 objects passed by the parent in Result function.
The 5 objects can either be the first half of the 10 elements or the second half.
The 5 objects will be mapped and display in a frame with their restaurant name, address,rating and cuisines.

A frame is chopped into two columns. The first column takes more space than the second one.
Within the first colum there are two rows. In the first row, it holds the name of a restaurant.
Cuisines are displayed in the form of badge, folliwng the restaurant name.
In the second row of the first col, it holds the address of the restaurant.
In the second colum, the rating is displayed.
All these 5 objects will be put into a fixed sized stack.
*/
export default function Item({firstPart, secondPart}){
    var items = firstPart || secondPart;
    var index = items.length
    return (
        <Stack >
        {items && items.map(item => (
            <div className="restaurant" key={index} >
            <Col>
                <Row>
                <div className="d-flex align-items-center">
                {item.name} 
                {item.cuisines && item.cuisines.map(cuisine => (
                    <Badge pill bg="light" className="custom-badge" key={index}>{cuisine.name}</Badge>
                ))}
              </div>
                </Row>
                <Row>{"📍"}{item.address.firstLine}, {item.address.city} </Row>
            </Col>
            <Col>{"⭐"}{item.rating.starRating}</Col>
        </div>
        ))}
        </Stack>     
   )
}