import React from "react"
import {Badge,Row,Col,Stack} from "react-bootstrap"
import "./item.css"


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