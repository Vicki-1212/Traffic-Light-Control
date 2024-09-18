import React from 'react'
import { useState, useEffect, createContext } from 'react'
import './App.css'
import TrafficLight from './components/TrafficLight'
import PedestrianButton from './components/PedestrianButton'
import Emergency from './components/Emergency'
import LightControl from './components/LightControl'

export const TrafficLightContext = createContext();

const App = () => {

  const [light, setLight] = useState("green")

  const [timer, setTimer] = useState(10)

  const[crossWalkTimer, setCrossWalkTimer] = useState(0)

  const [PedestrianRequest, setPedestrianRequest] = useState(false)

  const [emergencyMode, setEmergencyMode] = useState(false)

  const stopControl = () => {
    setLight("red")
    setTimer(7)
  }

  const slowControl = () => {
    setLight("yellow")
    setTimer(3)
  }

  const goControl = () => {
    setEmergencyMode(false)
    setLight("green")
    setTimer(10)
  }

  const emergency = () => {
    setEmergencyMode(true)
  }


  const crossWalk = (crossTime) => {
    setCrossWalkTimer(crossTime)
    setPedestrianRequest(true)
  }

  useEffect(() => {
    var interval = setInterval(() => {
      if(emergencyMode) {
        setLight("red")
        setTimer(7)
        clearInterval(interval)
      }
      else {
        if (PedestrianRequest) {
          if(light === "red") {
            setLight("red")
            setTimer(prevTimer => prevTimer + 5)
          }
          else {
            setTimeout(() => {
              setLight("red")
              setTimer(7)
            }, crossWalkTimer*1000)
          }
          setPedestrianRequest(false)
        }
        else {
          switch (light) {
            case "green":
              if(timer === 0) {
                setLight("yellow");
                setTimer(4);
              }
              break;
            case "yellow":
              if(timer === 0) {
                setLight("red");
                setTimer(8);
              }
              break;
            case "red":
              if(timer === 0) {
                setLight("green");
                setTimer(11);
              }
              break;
            default:
              break;
          }
          setTimer(prevTimer => prevTimer - 1);
        }
      }
      
    }, 1000);
    return () => clearInterval(interval);
    
  }, [light, timer, PedestrianRequest, emergencyMode, crossWalkTimer]);
  return (
    <>
      <TrafficLightContext.Provider value={{light, timer, emergencyMode, crossWalk, stopControl, slowControl, goControl, emergency}}>
        <div className="bg-container">
            <TrafficLight />
            <div className="controller-switch">
                <PedestrianButton />
                <Emergency />
                <LightControl />
            </div>
        </div>
      </TrafficLightContext.Provider>
    </>
  )
}

export default App