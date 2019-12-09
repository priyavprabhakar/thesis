import React, {useState} from "react"
import { IMAGE, VIDEO } from "../utilities/database"
import ReactPlayer from "react-player"


function ArchivalItem(props) {
    const [imageShowing, updateImageShowing] = useState(true)
    const {type, source, text, title, date} = props.sourceImage
    
    return <div className="archivalItemContainer" onClick={()=> {
        if (type === IMAGE) {
            updateImageShowing(!imageShowing)
        }
    }} > 
        {type === IMAGE && <div className="archivalItem">
            <img className = "archivalImage" src={source} alt="archival_source"/>
            {!imageShowing && 
                <div className="archivalText">
                    <div className = "titleDateContainer"> 
                        <div className = "archivalTitle">{title}</div>
                        <div className = "archivalDate">{date} </div>
                    </div>
                    <div>{text}</div>
                </div>
            }
            </div>
        }
        {
            type === VIDEO && <ReactPlayer controls
                height="325px" url={source} width="400px"/>
        }
    </div>
}


export default ArchivalItem
