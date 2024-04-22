import React from "react"
import {Button,Form, Stack} from 'react-bootstrap'
import "./index.css"


export default function Search(){
    return (
        <>
        <div style={{ height:"0.8rem"}}>&nbsp;</div>
            <Stack direction="horizontal" gap={2} className="right-aligned-stack">
                <Form.Select className="custom-select" aria-label="select cuisines">
                    <option>Cuisine Type</option>
                    <option value="1">Pizza</option>
                    <option value="2">Italian</option>
                    <option value="3">Burger</option>
                </Form.Select>

                <Form.Select className="custom-select" aria-label="select rating ranges">
                    <option>Rating Range</option>
                    <option value="1">4.8-5.0</option>
                    <option value="2">4.5-4.8</option>
                    <option value="2">4.0-4.5</option>
                    <option value="2">Below 4.0</option>
                </Form.Select>

                <Form.Control className="custom-control" placeholder="Search by Postcode" />
            <Button className="custom-button">Search</Button>
            </Stack>
        <div style={{ height:"0.8rem"}}>&nbsp;</div>
        </>
        
   )
    
}