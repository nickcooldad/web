import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Button } from './components/Button/Button';
function App() {
  return (
    <div className="App">
    <Counter/>
    <Button/>
    </div>
  );
}

export default App;
