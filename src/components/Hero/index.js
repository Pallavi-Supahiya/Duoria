import React from 'react'
import Group from "../../images/Group.png"
import Header from "../Head"
import ButtonImg from "../../images/Large.svg"


import "./style.scss"

const Hero = () => {
    return (
        <div className="hero">
            <Header></Header>
            <div className="hero-container">
            <div className="hero-content">
                <h1 className="heading1">Save up to 100% on restaurants and activities</h1>
                <h6 className="content1">Get your friends together to buy at a discount. Enjoy great deals at Din Tai Fung, Haidilao, Starbucks, and many more.</h6>
                <img src={ButtonImg} alt="button" />
            </div>
            <div className="hero-image">
                <img src={Group} alt="group" />
            </div>

            </div>
        </div>
    )
}

export default Hero
