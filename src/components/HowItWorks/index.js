import React from 'react'

import users from "../../images/HowItWorks/users.svg"
import message from "../../images/HowItWorks/message.svg"
import friend from "../../images/HowItWorks/add-friend.svg"
import tag from "../../images/HowItWorks/tag.svg"
import circle from "../../images/HowItWorks/circle.svg"
import line1 from "../../images/HowItWorks/Line Indicator 1.svg"
import line2 from "../../images/HowItWorks/Line Indicator 2.svg"
import line3 from "../../images/HowItWorks/Line Indicator 3.svg"

import "./style.scss"
import { element } from 'prop-types'

const HowItWorks = () => {
let data=[
    {
    img: users,
    heading: "Start a Group Buy",
    content: "Click “Start a Group Buy” above and fill out the form",
    line: line1,
    },
    {
        img: message,
        heading: "We contact you",
        content: "We will contact you when your Group Buy has been created on WhatsApp/Telegram",
        line: line2,
        },
        {
            img: friend,
            heading: "Invite",
            content: "Invite your friends to the group to accumulate more discounts",
            line: line3,
            },
            {
                img: tag,
                heading: "Receive discounts",
                content: "Receive e-gift and cashback via phone",
                line: null,
                },
]



    return (
        <div className="work">
            <div className="work-container">

                <div className="work-part1">
                    <h2 className="heading2">How it works</h2>
                    <p className="p1">If you have a group of 2 or more people buying from any one of the merchants listed above, you can get at least 20% discount.</p>
                    <p className="p2">Every person who enters the Group Buy<b> automatically gets a 20% discount.</b> For every person that a person adds to the Group Buy, the inviter receives<b> an additional 20%</b>, to a max of a <b>100% discount.</b>
</p>
                    <p className="p3">Note: you don't have to go to the restaurant or activity together.</p>

                </div>
                <div className="work-part2">
                    {data.map(element=>{
                        return(
                            <div className="work-card">
                                <div className="card-img">
                                    <div className="card-img-bg">
                                        <img className="card-icon" src={element.img} alt="icon" /> 
                                    </div>
                                    <img className="card-line" src={element.line} alt=""/>
                                </div>
                                <h5 className="card-heading">{element.heading}</h5>
                                <p className="card-content">{element.content}</p>
                                </div>
                        )
                    })}

                </div>

            </div>
            
        </div>
    )
}

export default HowItWorks
