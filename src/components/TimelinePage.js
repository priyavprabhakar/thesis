import '../styles/App.css';
import Header from './Header';
import TextPanel from './TextPanel';
import ArchivalPanel from './ArchivalPanel';
import Footer from './Footer';
import React, {useState} from "react"


function TimelinePage() {
  const [selectedDate, updateSelectedDate] = useState(undefined)
  return (
  <div className="timelinePageContainer">
      <Header update={updateSelectedDate}/>
      <div className = "contentContainer"> 
        <TextPanel selectedDate={selectedDate}/>
        <ArchivalPanel selectedDate = {selectedDate}> </ArchivalPanel>
      </div>
      <Footer/>
  </div>
  )
}

export default TimelinePage;


