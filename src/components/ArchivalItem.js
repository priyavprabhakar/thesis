import React, {useState, useEffect} from "react"
import _ from "lodash"


function ArchivalItem(props) {
    const [imageShowing, updateImageShowing] = useState(true)
    const image = props.sourceImage
    console.log(image)
    return <div className="archivalItem" onClick={()=> {
        updateImageShowing(!imageShowing)
    }} > 
        <img className = "archivalImage" src={image.source}/>
        {!imageShowing && 
            <div className="archivalText">
               <div className = "titleDateContainer"> <div className = "archivalTitle">{image.title} </div>
                <div className = "archivalDate">{image.date} </div>
                </div>
                <div>{image.text} </div>
            </div> }
        </div>
    }


export default ArchivalItem