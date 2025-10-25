import React, {useState, useEffect} from "react";
import './index.css';

export default function Timer({initialMinutes, initialSeconds}){

    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [time, setTime] = useState(100);

    useEffect(
            function () {
              let myInterval = setInterval(function () {
                // if (timeLeft > 0) {
                //     timeLeft=timeLeft-0.2;
                //     minutes = Math.floor(timeLeft / 60);
                //     seconds = Math.round(timeLeft % 60);
                //     setmin(minutes)
                //     setsec(seconds)
                // }
                // //else {clearInterval(id)}
    
                if(seconds > 0){
                  setSeconds(seconds - 1);
                  setTime(time - 0.027);
                }
                if(seconds === 0){
                  if(minutes === 0){
                    clearInterval(myInterval);
                  } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                    
                  }
                }
    
    
              }, 1000);
    
              return() => clearInterval(myInterval);
            });
    return(
        <div className="bottom-bar">
          <div className="bottom-container">
            <span className="time-label">Temps restant : 00:{minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${time}%` }}></div>
            </div>
            <span>⏰</span>
          </div>
        </div>
    );
}