import React, {useState} from 'react';
import '../styles/timeline.css';

function Timeline() {
    const dates = ["1885", "1947", "1954", "1966", "1975", "2000", "2004", "2007", "2009", "2014", "2018", "2019"]
    const [selectedTab, updateSelectedTab] = useState(dates[0])

  return (
    <div className="timeline">
        {
            dates.map(d => <div className ={`year ${selectedTab === d ? "selectedYear" : ""}`}
            onClick={() => updateSelectedTab(d)} 
            key={d}>{d}</div>)
        }
    </div>
  );
}

export default Timeline;