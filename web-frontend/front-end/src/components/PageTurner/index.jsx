import React from "react";
import {Pagination,PageItem} from 'react-bootstrap';
import "./index.css"

export default function PageTurner() {
  return (
    <> 
    <div style={{ height:"0.8rem"}}>&nbsp;</div>  
    <Pagination className="custom-pagination">
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Ellipsis />

    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Item disabled>{11}</Pagination.Item>
    <Pagination.Item active>{12}</Pagination.Item>
    <Pagination.Item disabled>{13}</Pagination.Item>
    <Pagination.Item >{14}</Pagination.Item>

    <Pagination.Ellipsis />
    <Pagination.Item>{20}</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
  </Pagination></>
 
    
  );
}