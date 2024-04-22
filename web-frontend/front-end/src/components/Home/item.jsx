import React from "react"
import {Stack, Container,Row,Col} from "react-bootstrap"
import "./item.css"

export default function Item(){
    return (

    <Stack gap={1} className="text-center w-75">
      <div className="reasult">
          <Col>
              <Row>Fusion Wok</Row>
              <Row>The Fifth Avenue</Row>
          </Col>
          <Col>⭐4.5</Col>
      </div>

      <div className="reasult">
          <Col>
              <Row>Fusion Wok</Row>
              <Row>The Fifth Avenue</Row>
          </Col>
          <Col>⭐4.5</Col>
      </div>

      <div className="reasult">
          <Col>
              <Row>Fusion Wok</Row>
              <Row>The Fifth Avenue</Row>
          </Col>
          <Col>⭐4.5</Col>
      </div>

      <div className="reasult">
          <Col>
              <Row>Fusion Wok</Row>
              <Row>The Fifth Avenue</Row>
          </Col>
          <Col>⭐4.5</Col>
      </div>

      <div className="reasult">
          <Col>
              <Row>Fusion Wok</Row>
              <Row>The Fifth Avenue</Row>
          </Col>
          <Col>⭐4.5</Col>
      </div>

      

      
  </Stack>
   )
    
}