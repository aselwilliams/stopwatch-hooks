import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] =useState(false)

  useEffect(()=>{
    let interval = null;

    if(timerOn) {
      interval=setInterval(()=>{
        setTime(prevTime=>prevTime+10)
      },10)
    } else {
      clearInterval(interval)
    }

    return ()=>clearInterval(interval)
  }, [timerOn])
  return (
    <div className="container">
    <div className="card__box">
      <h1>Stopwatch</h1>
      <div className="time">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)} :</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)} :</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && time===0 && (
          <button onClick={()=>setTimerOn(true)} className="btn btn-success mt-3">Start</button>
        )}
        {timerOn && (
          <button onClick={()=>setTimerOn(false)} className="btn btn-danger mt-3">Stop</button>
        )}
        {!timerOn && time!==0 && (
          <button onClick={()=>setTimerOn(true)}className="btn btn-primary me-3 mt-3">Resume</button>
        )}
        {!timerOn && time>0 && (
          <button onClick={()=>setTime(0)} className="btn btn-secondary mt-3">Reset</button>

        )}
      </div>
    </div>
    </div>
  );
}

export default App;
