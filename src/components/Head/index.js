import React from 'react'
import headericon from "../../images/Header/Group 22.svg";
import {Link} from "gatsby"
import {Button} from "../Button"

import "../Head/style.scss"
const Head = () => {
    return (
        <div className="header">
            <div className="header-icon">
                <img src={headericon} alt="logo" />
            </div>
            <div className="header-navigation">
                <Link to="#HowItWorks" className="nav-links"  >HOW IT WORKS</Link>
                <Link to="#Merchants" className="nav-links" >MERCHANTS</Link>
                <Link to="#About" className="nav-links" >ABOUT US</Link>
               <Button  className="nav-button" secondary="true">Group Buy</Button>

            </div>
            
        </div>
    )
}

export default Head
