
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { TableOfWords } from './components/tableOfWords/tabbleOfWords.jsx'
import { Keyboard } from './components/keyboard/keyboard.jsx';
import { getLetter2Status } from './functionsLogic/defenitionLetterColor.js';
import { response } from './response/response.js';
import { ModalWindow } from './components/modalWindow/modalWindow.jsx';
import { getRandomWord } from './functionsLogic/getRandomWords.js';

// https://react.dev/reference/react/useReducer
// после окончания игры показывать кнопку «Играть заново» и загадывать новое слово

function reducer(state, action){
  switch (action.type) {

    case 'addWord' : 
      if(state.selectedWords.length < 6 && response.includes(state.enteredLetters)){
        return {...state,
          selectedWords : [...state.selectedWords, state.enteredLetters],
          enteredLetters : ''
        }
      } else {
        return state
      };

      case 'addLetters' :
        if(state.enteredLetters.length < 5){
        return {
          ...state,
          enteredLetters : state.enteredLetters + action.payload
        }
      } else {
        return state
      }

      case 'deleteLetter' :
        if(state.enteredLetters.length > 0){
          return {
            ...state,
            enteredLetters: state.enteredLetters.slice(0, -1)
            } 
          }else{
            return state
        }

      case 'againGame':
        return {
          selectedWords : [], 
          enteredLetters : [], 
          hiddenWord : getRandomWord(response)}

    default :
      throw new Error('Error')
  }
}


function App() {


  const [state, dispatch] = useReducer(reducer, {selectedWords : [], enteredLetters : '', hiddenWord : getRandomWord(response)})
  console.log(state)


function onLetterPress(key){
      dispatch({
        type : 'addLetters',
        payload : key
      })
    }


function onEnterPress() {
  dispatch({
    type : 'addWord',
  })
}

function onBackspacePress () {
  dispatch({
    type : 'deleteLetter'
  })
}

function handleClickAgainPlay (){
  dispatch({
    type : 'againGame'
  })
}
  


const getWindowCondition = () => state.selectedWords.length === 6 || state.selectedWords.includes((state.hiddenWord))
  return (
    <div className="App">
      {getWindowCondition() && 
      <ModalWindow 
      condition={state.selectedWords.includes((state.hiddenWord))}
      handleClickAgainPlay={handleClickAgainPlay}
      />}
      
      <TableOfWords   
        selectedWords={state.selectedWords}
        enteredLetters={state.enteredLetters}
        hiddenWord={state.hiddenWord}
      />
     
      <Keyboard
       letter2status={getLetter2Status(state.selectedWords, state.hiddenWord)}
       onLetterPress={onLetterPress}
       onEnterPress={onEnterPress}
       onBackspacePress={onBackspacePress}
       />
    </div>
  );
}

export default App;
