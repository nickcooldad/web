
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { TableOfWords } from './components/tableOfWords/tabbleOfWords.jsx'
import { Keyboard } from './components/keyboard/keyboard.jsx';
import { getLetter2Status } from './functionsLogic/defenitionLetterColor.js';
import { response } from './response/response.js';
import { ModalWindow } from './components/modalWindow/modalWindow.jsx';

// https://react.dev/reference/react/useReducer
// после окончания игры показывать кнопку «Играть заново» и загадывать новое слово

function reducer(state, action){
  switch (action.type) {
    case 'addWord' : 
      if(state.selectedWords.length < 6){
        return {...state,
          selectedWords : [...state.selectedWords, action.payload.word],
        }
      } else {
        return {
          ...state
        }
      };
      case 'remote':
        return {
          selectedWords : [],
          updateHiidenWord : !state.updateHiidenWord
        }
    default :
      throw new Error('Error')
  }
}


function App() {

  const [enteredLetters, setEnteredLetters] = useState('')
  const [state, dispatch] = useReducer(reducer, {selectedWords : [], updateHiidenWord : false})
  const [hiddenWord, setHiddenWord] = useState('')

  useEffect(() => {
  const randomIndex = Math.floor(Math.random() * response.length)
   setHiddenWord(response[randomIndex])
  },[state.updateHiidenWord])
  
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

  setEnteredLetters(prev => {
    if(prev.length === 5 && response.includes(prev)){
      dispatch({
        type : 'addWord',
        payload : { word : prev }
      })
      return ''
    } else{
      return prev
    }
  })
}

function onBackspacePress () {
    setEnteredLetters(prev => {
      if(prev.length > 0){
        return prev.slice(0, -1)
      } else {
        return ''
      }
    })
}

function handleClickAgainPlay (){
  dispatch({
    type : 'remote',
  })
  setEnteredLetters('')
}

const getWindowCondition = () => state.selectedWords.length === 6 || state.selectedWords.includes((hiddenWord))
  return (
    <div className="App">
      {getWindowCondition() && 
      <ModalWindow 
      condition={state.selectedWords.includes((hiddenWord))}
      handleClickAgainPlay={handleClickAgainPlay}
      />}
      
      <TableOfWords   
        selectedWords={state.selectedWords}
        enteredLetters={enteredLetters}
        hiddenWord={hiddenWord}
      />
     
      <Keyboard
       letter2status={getLetter2Status(state.selectedWords, hiddenWord)}
       onLetterPress={onLetterPress}
       onEnterPress={onEnterPress}
       onBackspacePress={onBackspacePress}
       />
    </div>
  );
}

export default App;
