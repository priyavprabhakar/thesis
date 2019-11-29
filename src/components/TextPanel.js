import React from "react"
import TextPanelTitle from './TextPanelTitle'
import TextPanelText from './TextPanelText'
import '../styles/Content.css'


function TextPanel(props) {
    return <div className="textPanel"> 
    <TextPanelTitle selectedDate={props.selectedDate}/>
    <TextPanelText selectedDate={props.selectedDate}/>
    </div>
}

export default TextPanel