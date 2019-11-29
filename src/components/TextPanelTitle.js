import React from "react"
import {data} from '../utilities/database'
import '../styles/Content.css'


function TextPanelTitle(props) {
    const date = props.selectedDate
    const dateMetaData = data[date]
    return <> 
        {
            dateMetaData && <div className = "textPanelTitleContainer">
                <div className = "textPanelDate"> {date} </div>
                <div className = "textPanelTitle"> {dateMetaData.title} </div> 
            </div>
        }
    </>
}

export default TextPanelTitle