
import { useState } from 'react';
import './App.css';
import {TableOfWords} from './components/tableOfWords/tabbleOfWords.jsx'
import { Keyboard } from './components/keyboard/keyboard.jsx';
import { getLetter2Status } from './functionsLogic/defenitionLetterColor.js';

function App() {
  const hiddenWord = 'peace'
  const [selectedWords, setSelectedWords] = useState(['sport', 'greed', 'eagle'])
  const [enteredLetters, setEnteredLetters] = useState('')
console.log(selectedWords)

  const onLetterPress = (key) =>{
    if(enteredLetters.length < 5) {
      setEnteredLetters(enteredLetters + key)}
}

const onEnterPress = () =>{
  if(enteredLetters.length === 5 && selectedWords.length < 6){
    setSelectedWords([...selectedWords, enteredLetters])
    setEnteredLetters('')}
}

const onBackspacePress = () => {
  if(enteredLetters.length > 0) {
    setEnteredLetters(prev => prev.slice(0, -1))
  }
}

console.log(getLetter2Status(selectedWords, hiddenWord))
  return (
    <div className="App">
      <TableOfWords   
        selectedWords={selectedWords}
        enteredLetters={enteredLetters}
        hiddenWord={hiddenWord}
 
      />

      <Keyboard
       letter2status={getLetter2Status(selectedWords, hiddenWord)}
       onLetterPress={onLetterPress}
       onEnterPress={onEnterPress}
       onBackspacePress={onBackspacePress}
       />
    </div>
  );
}

export default App;
