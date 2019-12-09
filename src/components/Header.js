import React from "react"
import Timeline from './Timeline';
import '../styles/Header.css';
import logo_dekh_rahe from '../images/logo_dekh_rahe.png';
import {
    Link,
} from "react-router-dom";


function Header(props) {
    //Props are given by the parent App
    return <header className="headerContainer">
        {/* Passing the updateValue prop to the child */}
        <Link to = "/home"> { <img className = "logoImage" src={logo_dekh_rahe} alt="logo"/>} </Link>
        <Timeline update={props.update}/>
    </header>
}

export default Header

