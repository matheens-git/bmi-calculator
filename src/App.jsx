import React, { useState } from 'react'
import './app.css'

const App = () => {
    const [height,setHeight]=useState()
    const [weight,setWeight]=useState()
    const [bmi,setBmi]=useState()
    const [status,setStatus]=useState()
    const [error,setError]=useState(null)
    const [disp,setDisp]=useState(false)

    const calculateBMI=()=>{
      
      const isHeight=/^\d+$/.test(height);
      const isWeight=/^\d+$/.test(weight);
    if(isHeight && isWeight){
       const meter=height/100;
       const answer=(weight/(meter*meter));
       console.log("answer:"+answer);
       setBmi(answer.toFixed(2));
       if(answer < 18.5){
          setStatus('underweight')
       }
       else if(answer > 18.5 && answer < 25){
        setStatus('Normal')
       }
       else if(answer >= 25 && answer < 29){
        setStatus('overweight')
       }
         else if(answer >= 29 && answer < 100){
        setStatus('obese')
       }
       setError(null)
       setDisp(true)
    }
    else{
       setError('not a proper data')
        
    }}
    const clearBMI=()=>{
      setHeight('');
      setWeight('');
      setDisp(false)
    }
  return (
    <>
      <div className="container">
        <img src="./images/bmi-meter.png" alt="" />
        <div className="data">
          <h5>{error}</h5>
            <label htmlFor="height">height:</label>
            <input type="text"  id="height" value={height} onChange={(Event)=>(setHeight(Event.target.value))} />
            <label htmlFor="weight">weight:</label>
            <input type="text"  id="weight" value={weight} onChange={(Event)=>(setWeight(Event.target.value))}/>
            <div id="btn-div">
            <button id='calculate-btn' onClick={calculateBMI}>calculate</button>
            <button id='clear-btn' onClick={clearBMI}>clear</button>
            </div>
           { disp && <div className='results'>
                <h3>BMI:{bmi}</h3>
                <h3>status:{status}</h3>

            </div>}

        </div>
      </div>
    </>
  )
}

export default App
