import React from "react"
import {data} from '../utilities/database'

function ArchivalPanel(props) {
    const date = props.selectedDate
    const dateMeta = data[date]
    console.log(date)
    console.log(dateMeta)
    return <div>Archival Panel</div>
}

export default ArchivalPanel