import React from 'react'
import { useContext } from 'react';
import { GiStopSign } from "react-icons/gi";
import { RiSlowDownFill } from "react-icons/ri";
import { SiGoland } from "react-icons/si";
import './index.css'
import { TrafficLightContext } from '../../App';

const LightControl = () => {
  const {stopControl, slowControl, goControl} = useContext(TrafficLightContext)

  const onClickRedControl = () => {
    stopControl()
  }

  const onClickYellowControl = () => {
    slowControl()
  }

  const onClickGreenControl = () => {
    goControl()
  }

  return (
    <div className="light-controller-container">
        <button className="control stop" onClick={onClickRedControl}><GiStopSign size={25}/></button>
        <button className="control ready" onClick={onClickYellowControl}><RiSlowDownFill size={25} /></button>
        <button className="control go" onClick={onClickGreenControl}><SiGoland size={25}/></button>
    </div>
  )
}

export default LightControl
