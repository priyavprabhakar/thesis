import React from "react";
import '../styles/Home.css'
import {Link} from "react-router-dom"
import { Button } from "semantic-ui-react";
import eye from "../images/homepage/eye.png"


function Home() {
    return (
        <div className = "homePageContainer">
                <img src={eye} className="mainPageEye" alt="eye"/>
                <div className = "introDataTitle"> DEKH RAHE </div>
                <div className = "introDate">An interactive timeline of India's surveillance state in the making.</div>
                <Link to = "/intro-1">
                    <Button basic size="big" inverted>
                        Begin
                    </Button>
                </Link>
        </div>
    )
}

export default Home

