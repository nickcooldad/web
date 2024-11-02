import {Catalog} from './components/catalog.jsx'
import './App.css';
import { useState } from 'react';

const [selectedValues, setSelectedValues] = useState([])

function App() {
  return (
    <div className="App">
      <Catalog/>





    </div>
  );
}

export default App;
