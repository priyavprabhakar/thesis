import React, {useState} from 'react';
import '../styles/timeline.css';
import mainLogo from "../images/logo.png"

function Timeline() {
    const dates = ["1885", "1947", "1954", "1966", "1975", "2000", "2004", "2007", "2009", "2014", "2018", "2019"]
    const [selectedTab, updateSelectedTab] = useState(dates[""])

  return (
    <div className="timeline">
      <img src={mainLogo} className ="mainLogo"/>
      <div className = "timelineDates"> {
        dates.map(d => <div className ={`year ${selectedTab === d ? "selectedYear" : ""}`}
            onClick={() => updateSelectedTab(d)} 
            key={d}>{d}</div>)
      }
      </div> 
    </div>
    
  );
}

export default Timeline;