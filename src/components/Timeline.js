import React, {useState, useEffect} from "react"
import {data} from '../utilities/database'
import '../styles/Timeline.css';

function Timeline(props) {
    const dates = Object.keys(data)
    const [timelineSelected, updateTimelineSelected] = useState(dates[0])

    useEffect(() => {
        props.update(timelineSelected)
    }, [])

    return <div className="timelineContainer">
        {dates.map(d => <div onClick={()=> {
            updateTimelineSelected(d)
            props.update(d)
        }} 
            className={`${timelineSelected === d ? "selectedDate": ""} date`} 
            key={d}> {d} </div>)}
    </div>
}

export default Timeline