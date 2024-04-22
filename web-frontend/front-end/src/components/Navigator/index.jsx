import React from "react"
import "./index.css"

export default function Navigator(){
    return (
        <header className="navbar navbar-expand-lg navbar-custom">
            <nav className="container">
                <a className="navbar-brand" href="#home">
            <img
              src="./icons/header.jpg"
              style={{ width: '15.8125rem', height: '2.25rem' }}
              className="d-inline-block align-top"
              alt="Just Eat logo"/>
                </a>
            </nav>
        </header>
        
    )
}