import React, { useContext } from 'react'
import { FaWalking } from "react-icons/fa";
import './index.css'
import { TrafficLightContext } from '../../App';

export const PedestrianButton = () => {
  const {crossWalk, timer} = useContext(TrafficLightContext)


  const onClickWalkButton = () => {
    crossWalk(timer)
  }

  return (
    <button className="walk-button" onClick={onClickWalkButton}><FaWalking size={25} /></button>
  )
}


export default PedestrianButton