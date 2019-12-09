import React from "react";
import {intro_data} from '../utilities/database';
import '../styles/Home.css'
import {Link} from "react-router-dom"
import { Button } from "semantic-ui-react";


function Home() {
    return (
        <div className = "homePageContainer">
                <div className = "introDataTitle"> {intro_data.title} </div>
                <div className = "introDate"> {intro_data.subtitle} </div>
                <Link to = "/timeline">
                    <Button basic size="big" inverted>
                        {intro_data.button}
                    </Button>
                </Link>
        </div>
    )
}

export default Home

