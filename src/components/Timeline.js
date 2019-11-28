import React, {useState} from "react"
import {data} from '../utilities/database'
import '../styles/Timeline.css';


function Timeline( ) {
    const dates = Object.keys(data)
    const [selected, updateSelected] = useState(dates[0])
    console.log(selected)
    return <div>
        {dates.map(d => <div onClick={()=> updateSelected(d)} className={`${selected === d ? "selectedDate": ""} date`} key={d}> {d} </div>)}
    </div>
}

export default Timeline