import {ProgressBar} from './components/progressBar.jsx'
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [data, setData] = useState({arrayInput:[], value:0})
  const width = {width : 900 / data.arrayInput.length}
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
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const width1 = rect.width;
      console.log('=_=_',width1);
    }
  }, [data]);

  return (
    <div className="App">
     <ProgressBar 
     thresholds={data.arrayInput} 
     value={data.value} 
     hundleInputArrayChange={hundleInputArrayChange} 
     hundleInputValueChange={hundleInputValueChange}
     width={width}/>
    </div>  
  );
}
export default App;
