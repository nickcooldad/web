
import { useState } from 'react';
import './App.css';
import {TableOfWords} from './components/tableOfWords/tabbleOfWords.jsx'
import { Keyboard } from './components/keyboard/keyboard.jsx';

function App() {
  const hiddenWord = 'peace'
  const [selectedWords, setSelectedWords] = useState(['sport', 'greed', 'eagle'])
  const [enteredLetters, setEnteredLetters] = useState('pea')

  return (
    <div className="App">
      <TableOfWords   
        selectedWords={selectedWords}
        enteredLetters={enteredLetters}
        hiddenWord={hiddenWord}
 
      />

      {/* <Keyboard
        hiddenWord={hiddenWord}
        electedWords={selectedWords}
        enteredLetters={enteredLetters}
        setSelectedWords={setSelectedWords}
        setEnteredLetters={setEnteredLetters}/> */}
    </div>
  );
}

export default App;
