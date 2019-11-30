import React from "react"
import '../styles/Footer.css'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";



function Footer() {
    return  <footer className = "footerContainer" > 
    <Link className = "footerText" to = "/about"> about </Link> 
    <Link className = "footerText" to = "/resources"> resources </Link>
    <Link className = "footerText" to = "/bibliography"> bibliography </Link>
    </footer>
}

export default Footer
