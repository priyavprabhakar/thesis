import React from "react"
import {data} from '../utilities/database'
import '../styles/Content.css'


function TextPanelText(props) {
    const date = props.selectedDate
    const dateMetaData = data[date]
    return <div className = "textPanelText"> 
        {
            dateMetaData && <>
                {dateMetaData.text}
            </>
        }
    </div>
}

export default TextPanelText