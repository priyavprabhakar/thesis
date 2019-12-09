import React from "react"
import {data} from '../utilities/database'
import _ from "lodash"
import ArchivalItem from './ArchivalItem';
import '../styles/Archival.css'

function ArchivalPanel(props) {
    const date = props.selectedDate
    const dateMeta = data[date]
    const images = _.get(dateMeta, ["media"], [])

    return <div className = "archivalPanelContainer">
        {
             images.map(i => <ArchivalItem sourceImage = {i}/>)
        }
    </div>
}   

export default ArchivalPanel