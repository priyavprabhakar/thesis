import './App.css';
import Header from './components/Header';
import TextPanel from './components/TextPanel';
import React, {useState} from "react";


function App() {
  const [selectedDate, updateSelectedDate] = useState(undefined)
  return (
  <>
    <Header update={updateSelectedDate}/>
    <div className = "contentContainer"> 
      <TextPanel selectedDate={selectedDate}/>
    </div>
  </>
  )
}

export default App;


