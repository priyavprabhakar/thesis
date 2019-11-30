import React from "react";
import {intro_data} from '../utilities/database';
import '../styles/Home.css'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function Home() {
    return <div className = "homePageContainer">
        <div className = "introDataTitle"> {intro_data.title} </div>
        <div className = "introDate"> {intro_data.subtitle} </div>
        <Link to = "/timeline"> {intro_data.button} </Link>
    </div>
}

export default Home

