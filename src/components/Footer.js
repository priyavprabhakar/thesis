import React from "react"
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";



function Footer() {
    return <footer>
    <Link to = "/about"> about </Link>
    <Link to = "/resources"> resources </Link>
    <Link to = "/bibliography"> bibliography </Link>
    </footer>
}
