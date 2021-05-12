import React from 'react'


import "./style.scss"
import {Button} from "../Button"


import pic1 from "../../images/Merchants/pic1.png"
import pic2 from "../../images/Merchants/pic2.png"
import pic3 from "../../images/Merchants/pic3.png"
import pic4 from "../../images/Merchants/pic4.png"
import pic5 from "../../images/Merchants/pic5.png"
import pic6 from "../../images/Merchants/pic6.png"
import pic7 from "../../images/Merchants/pic7.png"
import pic8 from "../../images/Merchants/pic8.png"
import MerchantButton from "../../images/Merchants/merchants-button.svg"

const Merchants = () => {
    let data=[
        { image: pic1, about: "RESTRAUNT", name: "Business Name"},
        { image: pic2, about: "RESTRAUNT", name: "Business Name"},
        { image: pic3, about: "RESTRAUNT", name: "Business Name"},
        { image: pic4, about: "RESTRAUNT", name: "Business Name"},
        { image: pic5, about: "ACTIVITY", name: "Business Name"},
        { image: pic6, about: "SPA AND MASSAGE", name: "Business Name"},
        { image: pic7, about: "ACTIVITY", name: "Business Name"},
        { image: pic8, about: "ACTIVITY", name: "Business Name"},
    ]
    return (
        <div className="merchants" id="Merchants">
            <div className="merchants-container">
                <h2 className="heading3">Merchants</h2>
                <div className="cards-container">
                    {data.map(element=>{
                        return(
                            <div className="merchant-image">
                                <div className="image-div">
                                <img src={element.image} alt="image"></img>
                                </div>
                                <h4 className="about">{element.about}</h4>
                                <h3 className="name">{element.name}</h3>
                            </div>
                        )
                    })}
                   
                </div>
                <div className="merchant-end" >
                <p className="merchant-tagline" >
                Don’t see a merchant that you like? Request one here.
                </p>
                 <Button big="true" secondary="true" className="merchant-button">Request merchant</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Merchants
