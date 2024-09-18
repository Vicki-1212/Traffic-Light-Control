import React from 'react'
import { FaWalking } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import "./index.css"

const CrossWalkDisplay = (props) => {
    var displayWalk;
    const {light, emergency} = props

    if(light === "red") {
      displayWalk = "walk";
    }
    else {
      displayWalk = "not-walk"
    }


  return (
    <div className="crosswalk-container">
        {!emergency && <FaWalking size={30} className={displayWalk}/>}
        {emergency && <FaAmbulance color={"008000"} size={30}/>}
    </div>
  )
}

export default CrossWalkDisplay
