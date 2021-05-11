import React from 'react'
import Image1 from "../../images/Save/multiple-users-silhouette 1.svg"
import Image2 from "../../images/Save/hot-sale 1.svg"
import Image3 from "../../images/Save/image 3.svg"

import "./style.scss"


const Save = () => {
    return (
        <div className="save">
            <div className="save-container">
                <div className="save-div1">
                    <h1 className="heading4">Why Save With Duoria</h1>
                </div>
                <div className="save-div2">
                    <div className="div2-innerdiv">
                        <img src={Image2} alt="users"/>
                        <span className="icon-detail">Discounts up to  100%</span>
                    </div>
                    <div className="div2-innerdiv">
                    <img src={Image1} alt="users"/>
                    <span className="icon-detail">Save with friends</span>
                    </div>
                    <div className="div2-innerdiv">
                    <img src={Image3} alt="users"/>
                    <span className="icon-detail">Shop local,
save local</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Save
