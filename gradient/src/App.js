
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [tempValue, setTempValue] = useState({rgb1:'#FFFFFF', rgb2 : '#FFFFFF'})
const [backGroundColor, setBackGroundColor] = useState(`linear-gradient(to bottom, white, white)` )

const hundleChangeFirst = (event) =>{
  setTempValue(prev => ({...prev, rgb1: event.target.value}))
}
const hundleChangeLast = (event) => {
  setTempValue(prev => ({...prev, rgb2: event.target.value}))
  
}
const hundleSubmit = (event) =>{
  event.preventDefault();
  setBackGroundColor(`linear-gradient(to bottom, ${tempValue.rgb1}, ${tempValue.rgb2})`)

}

return (
  <div className='gradient' style={{ background: backGroundColor }}>
    <div className="buttonsRgb"  >
        <div className='inputs'>
        <input className="firstColor" placeholder='RGB' onChange={hundleChangeFirst}/>
        <input className="lastColor" placeholder='RGB' onChange={hundleChangeLast}/>
      </div>
      <button className="goGradient" onClick={hundleSubmit}>PAINT</button></div>
        </div>
        
  );
}

export default App;
