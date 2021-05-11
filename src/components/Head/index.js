import React from 'react'
import headericon from "../../images/Header/Group 22.svg";
import headerbutton from "../../images/Header/Medium.svg";
import {Link} from "gatsby"

import "../Head/style.scss"
const Head = () => {
    return (
        <div className="header">
            <div className="header-icon">
                <img src={headericon} alt="logo" />
            </div>
            <div className="header-navigation">
                <Link to="#" className="nav-links" >HOW IT WORKS</Link>
                <Link to="#" className="nav-links" >MERCHANTS</Link>
                <Link to="#" className="nav-links" >ABOUT US</Link>
               <button  className="nav-button"><img src={headerbutton} alt="button" /></button>

            </div>
            
        </div>
    )
}

export default Head
