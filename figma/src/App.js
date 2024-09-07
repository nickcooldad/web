
import './App.css';
import { ProgressBar } from './components/progressBar';

function App() {
  return (
    <>
    <div className="App">
      <ProgressBar
      thresholds={[25,50, 100, 200, 500, 1000]}
      value={20}/>
    </div>
    <div className="App">
      <ProgressBar
      thresholds={[25,50, 100, 200, 500, 1000]}
      value={25}/>
    </div>
    <div className="App">
      <ProgressBar
      thresholds={[25,50, 100, 200, 500, 1000]}
      value={699}/>
    </div>
    <div className="App">
      <ProgressBar
      thresholds={[25,50, 100, 200, 500, 1000]}
      value={1000}/>
    </div>
    <div className="App">
      <ProgressBar
      thresholds={[10, 20, 40, 80]}
      value={55}/>
    </div>
    </>
  );
}

export default App;


