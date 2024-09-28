import {ProgressBar} from './components/progressBar.jsx'
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({arrayInput:[], value:0})
  const hundleInputValueChange = (event) => {
  setData(prev => ({
  ...prev,
  value: event.target.value}))
  }

  return (
    <div className="App" style={{ width: 600 }}>
      <input className='inputValue' placeholder='Введите значение' value={data.value} onChange={hundleInputValueChange}></input>
     <ProgressBar 
     thresholds={[10, 30, 60, 100, 200, 1000]} 
     value={data.value} 
     />
    </div>  
  );
}
export default App;
