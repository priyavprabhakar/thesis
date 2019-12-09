import React, {useState} from "react"


function ArchivalItem(props) {
    const [imageShowing, updateImageShowing] = useState(true)
    const image = props.sourceImage
    return <div className="archivalItem" onClick={()=> {
        updateImageShowing(!imageShowing)
    }} > 
        <img className = "archivalImage" src={image.source} alt="archival_source"/>
        {!imageShowing && 
            <div className="archivalText">
               <div className = "titleDateContainer"> 
               <div className = "archivalTitle">{image.title} </div>
                <div className = "archivalDate">{image.date} </div>
                </div>
                <div>{image.text} </div>
            </div> }
        </div>
    }


export default ArchivalItem