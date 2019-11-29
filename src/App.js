import './App.css';
import Header from './components/Header';
import TextPanel from './components/TextPanel';
import React, {useState} from "react";


function App() {

  const [selectedDate, updateSelectedDate] = useState(undefined)
  console.log(selectedDate)
  return (
  <div>
    <Header update={updateSelectedDate}/>
  </div>)
}

export default App;


