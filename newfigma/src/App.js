import {ProgressBar} from './components/progressBar.jsx'
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [data, setData] = useState({arrayInput:[], value:0})

   const hundleInputArrayChange = (event) => {
   const array = event.target.value.split(',').map(item => item.trim())
    setData(prev => ({
      ...prev,
      arrayInput: array
    }))
  }

  const hundleInputValueChange = (event) => {
  setData(prev => ({
  ...prev,
  value: event.target.value}))
  }

  return (
    <div className="App">
     <ProgressBar 
     thresholds={data.arrayInput} 
     value={data.value} 
     hundleInputArrayChange={hundleInputArrayChange} 
     hundleInputValueChange={hundleInputValueChange}
     width={100 / data.arrayInput.length}
     />
    </div>  
  );
}
export default App;
