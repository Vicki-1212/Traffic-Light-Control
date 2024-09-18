import React, { useContext } from 'react'
import './index.css'
import { TrafficLightContext } from '../../App'


const Emergency= () => {

  const {emergency } = useContext(TrafficLightContext)

  const onClickEmergencyButton = () =>{
    emergency()
  }


  return (
    <div>
        <button className="emergency-button" onClick={onClickEmergencyButton}>Emergency</button>
    </div>
  )
}

export default Emergency
