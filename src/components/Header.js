import React from "react"
import Timeline from './Timeline';
import '../styles/Header.css';

function Header(props) {
    //Props are given by the parent App
    return <header className="headerContainer">
        {/* Passing the updateValue prop to the child */}
        <Timeline update={props.update}/>
    </header>
}

export default Header