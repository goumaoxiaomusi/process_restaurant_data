import React from "react"
import {Container, Stack} from 'react-bootstrap'
import Item from "./item"
import Search from "./Search/index"

export default function Home(){
    return (
        <>
        <Container>
        <Search />
        <Stack direction="horizontal" gap={3}>
            <Item></Item>
            <Item></Item>
        </Stack>
        </Container>

        
        </>
        
        
    );
}