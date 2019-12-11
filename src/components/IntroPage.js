import React from 'react'
import eye from "../images/homepage/eye.png"
import {Link} from "react-router-dom"
import { Button } from 'semantic-ui-react'

function IntroPage({text, buttonText, nextLink}) {
    return (
        <div className = "homePageContainer" style={{justifyContent: "flex-start"}}>
            <img src={eye} className="mainPageEye" alt="eye"/>
            <div className="introPageText">
                {text}
            </div>
            <Link to={nextLink}>
                <Button basic size="big" inverted>
                    {buttonText}
                </Button>
            </Link>
        </div>
    )
}

export default IntroPage