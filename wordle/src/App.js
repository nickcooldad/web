
import { useState } from 'react';
import './App.css';
import {TableOfWords} from './components/tableOfWords/tabbleOfWords.jsx'

function App() {
  const hiddenWord = 'peace'
  const [selectedWords, setSelectedWord] = useState(['sport', 'greed', 'eagle', 'award', 'salad', 'peace'])
  const [enteredLetters, setEnteredLetters] = useState('')

  return (
    <div className="App">
      <TableOfWords 
      selectedWords={selectedWords}
      enteredLetters={enteredLetters}
      hiddenWord={hiddenWord}
      />
    </div>
  );
}

export default App;
