import React from "react";
import {intro_data} from '../utilities/database';
import '../styles/Home.css'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import eye_front from '../images/eye_front.png'
import { homedir } from "os";

function Home() {
    return <div className = "homePageContainer">
        <img className = "bottom_left" src={bottom_left_home.png} />}
        <Link className = "eyeFront" to = "/timeline"> {<img className = "eye_front" src={eye_front.png}/>} </Link>
        <div className = "introDataTitle"> {intro_data.title} </div>
        <div className = "introDate"> {intro_data.subtitle} </div>
        <Link to = "/timeline"> {intro_data.button} </Link>
    </div>
}

export default Home

