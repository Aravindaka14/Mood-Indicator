import React from 'react'
import { useState } from 'react';
import '../styles/App.css';
const App = () => {
  const [color, setColor] = useState('rgb(238, 241, 0)')
  let handleChange = (option) =>{
    if(option == 'Sad'){
      return setColor('rgb(19, 0, 164)')
    }else if(option == "Sleepy"){
      return setColor('rgb(35, 177, 0)')
    }else if(option == "Excited"){
      return setColor('rgb(255, 0, 66)')
    }else if(option == "Happy"){
      return setColor('rgb(238, 241, 0)')
    }
  }
  return (
    <div id="main">
      <select onChange={(e)=>{handleChange(e.target.value)}}>
        <option>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id="mood-indicator" style={{backgroundColor:color}}></div>
    </div>
  )
}


export default App;
