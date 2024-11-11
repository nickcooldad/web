
import { useEffect, useState } from 'react';
import './App.css';
import {TableOfWords} from './components/tableOfWords/tabbleOfWords.jsx'
import { Keyboard } from './components/keyboard/keyboard.jsx';
import { getLetter2Status } from './functionsLogic/defenitionLetterColor.js';
import { response } from './response/response.js';

function App() {
  const hiddenWord = 'peace'
  const [selectedWords, setSelectedWords] = useState([])
  const [enteredLetters, setEnteredLetters] = useState('')
  const [pressedKey, setPressedKey] = useState(null)

  useEffect(() => {

    const hadleKeyDown = (e) => {
      const key = e.key.toLowerCase()

      if(/^[a-z]$/.test(key)){
        onLetterPress(key)
      }

      else if(key === 'enter'){
        onEnterPress()
      }

      else if(key === 'backspace'){
        onBackspacePress()
      }
    }

    const handleKeyUp = () => {
      setPressedKey(null)
    }

    window.addEventListener('keydown', hadleKeyDown);
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', hadleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [enteredLetters, selectedWords])


function onLetterPress(key){
    if(enteredLetters.length < 5) {
      setEnteredLetters(enteredLetters + key)}
}

function onEnterPress() {
  if(enteredLetters.length === 5 && selectedWords.length < 6 && response.includes(enteredLetters)){
    setSelectedWords([...selectedWords, enteredLetters])
    setEnteredLetters('')}
}

function onBackspacePress () {
  if(enteredLetters.length > 0) {
    setEnteredLetters(prev => prev.slice(0, -1))
  }
}

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
