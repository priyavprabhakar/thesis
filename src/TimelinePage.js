import './App.css';
import Header from './components/Header';
import TextPanel from './components/TextPanel';
import ArchivalPanel from './components/ArchivalPanel';
import Footer from './components/Footer';
import React, {useState} from "react"


function TimelinePage() {
  const [selectedDate, updateSelectedDate] = useState(undefined)
  return (
  <>
    <Header update={updateSelectedDate}/>
    <div className = "contentContainer"> 
      <TextPanel selectedDate={selectedDate}/>
      <ArchivalPanel selectedDate = {selectedDate}> </ArchivalPanel>
    </div>
    <Footer> </Footer>
  </>
  )
}

export default TimelinePage;


