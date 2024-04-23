import React from "react"
import {Badge,Row,Col,Stack} from "react-bootstrap"
import "./item.css"


export default function Item({firstPart, secondPart}){
    var items = firstPart || secondPart;
    var index = items.length
    return (
        <Stack>
        {items && items.forEach(item => (
            <div className="restaurant" key={index}>
                {index = index -1}
            <Col>
                <Row>
                <div className="d-flex align-items-center">
                {item.name} 
                {console.log("One Restaurant:")}
                {console.log(item.name)}
                {item.cuisines && item.cuisines.map(cuisine => (
                    <Badge bg="info" className="ms-2" key={index}>{cuisine.name}{console.log(cuisine.name)}</Badge>
                ))}
              </div>
                </Row>
                <Row>{item.address.city},{item.address.firstLine} {console.log(item.address.city)} {console.log(item.address.firstLine)} </Row>
            </Col>
            <Col>{item.rating.starRating}</Col>
        </div>
        ))}
        </Stack>     
   )
}