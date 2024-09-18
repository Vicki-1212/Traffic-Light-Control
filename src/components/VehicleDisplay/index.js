import React from 'react'
import { FaCar } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import "./index.css"


const  VehicleDisplay = (props) => {
    var displayVehicle
    const {light, emergency} = props

    if(light === "red") {
        displayVehicle = "no-car"
    }
    else {
        displayVehicle = "go-car"
    }

  return (
    <div className="car-display-container">
        {!emergency && <FaCar size={30} className={displayVehicle}/>}
        {emergency && <FaAmbulance size={30} color={"#008800"} />}
    </div>
  )
}

export default VehicleDisplay
