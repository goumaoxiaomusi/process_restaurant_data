import React from "react"
import "./nav.css"
import { useNavigate } from "react-router-dom"

export default function Navigator(){
    const navigate = useNavigate()
    return (
        <header className="navbar navbar-expand-lg navbar-custom">
            <nav className="container">
                <a className="navbar-brand" href="#home">
            <img
              onClick={() => navigate('/landing')}
              src="./icons/header.jpg"
              style={{ width: '14.3rem', height: '2rem' }}
              className="d-inline-block align-top"
              alt="Just Eat logo"/>
                </a>
            </nav>
        </header>
        
    )
}