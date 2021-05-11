import React from 'react'
import Taco from "../../images/Icons/Taco.svg" 
import BurgerKing from "../../images/Icons/BurgerKing.svg" 
import McD from "../../images/Icons/McD.svg" 
import Jollie from "../../images/Icons/Jollie.svg" 
import StarBucks from "../../images/Icons/StarBucks.svg" 


import "./style.scss"



const Icons = () => {
let arrayicon=[Taco, BurgerKing, McD, Jollie, StarBucks]
arrayicon=[...arrayicon, ...arrayicon]


    return (
        <div className="icons">
      
            <div className="icons-container">
                {arrayicon.map((element,key)=>{
                    return(
                        <img className="icon-img" src={element} key={"icon"+key} />
                    )
                })}
            </div>
            </div>
        
    )
}

export default Icons
