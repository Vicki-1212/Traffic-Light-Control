import React, {useContext} from 'react'
import './index.css'
import { TrafficLightContext } from '../../App';
import CrossWalkDisplay from '../CrossWalkDisplay'; 
import VehicleDisplay from '../VehicleDisplay';

const TrafficLight = () => {

  const {light, timer, emergencyMode} = useContext(TrafficLightContext);

  var display;
  var displayColor;

  if(light === "green") {
    displayColor = "display-green"
    if(timer === 10) {
      display = "GO"
    }
    else {
      display = timer
    }
  }
  
  if(light === "red") {
    displayColor = "display-red"
    if(timer === 7) {
      display = "STOP"
    }
    else {
      display = timer
    }
  }

  if(light === "yellow") {
    displayColor = "display-yellow"
    if(timer === 3) {
      display = "SLOW"
    }
    else {
      display = timer
    }
  }

  return (
    <>
    <div className="timer-container">
      <CrossWalkDisplay light={light} emergency={emergencyMode}/>
      <div className="time-display-container">
        <h1 className={displayColor}>{display}</h1>
      </div>
      <VehicleDisplay light={light} emergency={emergencyMode}/>
    </div>
    <div className="traffic-card">
      <div className={`light ${light === "red" ? "red" : ""}`}></div>
      <div className={`light ${light === "yellow" ? "yellow" : ""}`}></div>
      <div className={`light ${light === "green" ? "green" : ""}`}></div>
    </div>
    </>
  )
}

export default TrafficLight
