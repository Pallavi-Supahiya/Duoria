import React from 'react'
import img1 from "../../images/Join/User 2.svg"
import img2 from "../../images/Join/User 3.svg"
import img3 from "../../images/Join/User 4.svg"
import img4 from "../../images/Join/User 6.svg"
import Logo from "../../images/Join/image 1.svg"
import iButton from "../../images/Join/Large.svg"
import { Button } from "../Button"

import "./style.scss"

const Join = () => {
    return (
        <div className="join">
            <div className="join-container">
                <div className="join-div1">
                    <img src={img2} alt="image1" className="join-div1-image1"/>
                    <img src={img1} alt="image2" className="join-div1-image2"/>
                    <img src={img3} alt="image3" className="join-div1-image3"/>
                </div>
                <div className="join-div2">
                    <img src={Logo} alt="logo" className="join-div2-logo" />
                    <span className="join-div2-text">Ready to join hundreds of people who saved money on Duoria?</span>
                    <Button className="join-div2-button" primary="true" big="true" >Get Started</Button>
                </div>
                <div className="join-div3">
                    <img src={img4} alt="image4" className="join-div3-image4"/>
                    <img src={img4} alt="image5" className="join-div3-image5"/>
                    <img src={img4} alt="image6" className="join-div3-image6"/>
                </div>
            </div>
        </div>
    )
}

export default Join
