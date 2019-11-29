import './App.css';
import Header from './components/Header';
import TextPanel from './components/TextPanel';
import ArchivalPanel from './components/ArchivalPanel'
import React, {useState} from "react"


function App() {
  const [selectedDate, updateSelectedDate] = useState(undefined)
  return (
  <>
    <Header update={updateSelectedDate}/>
    <div className = "contentContainer"> 
      <TextPanel selectedDate={selectedDate}/>
      <ArchivalPanel selectedDate = {selectedDate}> </ArchivalPanel>
    </div>
  </>
  )
}

export default App;


