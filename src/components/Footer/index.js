import React from "react"
import Instagram from "../../images/Foot/Instagram.svg"
import Dribbble from "../../images/Foot/Dribbble.svg"
import Twitter from "../../images/Foot/Twitter.svg"
import Youtube from "../../images/Foot/Youtube.svg"

import "./style.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-part1">
          <p className="footer-part1-text">How it works</p>
          <p className="footer-part1-text">Merchants</p>
          <p className="footer-part1-text">About Us</p>
        </div>
        <div className="footer-part2">
          <img src={Instagram} alt="insta" />
          <img src={Dribbble} alt="dribble" />
          <img src={Twitter} alt="twitter" />
          <img src={Youtube} alt="youtube" />
        </div>
      </div>
    </div>
  )
}

export default Footer