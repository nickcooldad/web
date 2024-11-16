
import { useEffect, useState } from 'react';
import './App.css';
import { TableOfWords } from './components/tableOfWords/tabbleOfWords.jsx'
import { Keyboard } from './components/keyboard/keyboard.jsx';
import { getLetter2Status } from './functionsLogic/defenitionLetterColor.js';
import { response } from './response/response.js';
import { ModalWindow } from './components/modalWindow/modalWindow.jsx';
function App() {
  const hiddenWord = 'peace'
  const [selectedWords, setSelectedWords] = useState([])
  const [enteredLetters, setEnteredLetters] = useState('')




function onLetterPress(key){
    setEnteredLetters(prev => {
      if(prev.length < 5){
        return prev + key
      } else{
        return prev
      }
    })
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
const getWindowCondition = () => selectedWords.length === 6 || selectedWords.includes((hiddenWord))

  return (
    <div className="App">
      {getWindowCondition() && <ModalWindow condition={selectedWords.includes((hiddenWord))}/>}
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
