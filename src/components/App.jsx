import React, { useState } from "react";
import '../styles/ap.css';

function App() {
  setInterval(newTime, 1000);
  const times = new Date().toLocaleTimeString()
  const [time , setTime] = useState(times)
  function newTime() {
    const newtime = new Date().toLocaleTimeString()
    setTime(newtime)
  }
  return (
    <div className="align">
    <div className="container">
      <h5>Loading...</h5>
      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>
      <h1>🪴</h1>
    </div>
    </div>
  );
}

export default App;
