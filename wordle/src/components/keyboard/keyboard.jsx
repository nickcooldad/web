import { keys } from "./keyboard"
import './keyboard.css'
//import { defenitionLetterPosition, defenitionQuantityLetter, isLetterInWord } from "../../functionsLogic/defenitionLetterPosition"
import cn from 'classnames'

// letter2status
// onLetterPress
// onEnterPress
// onBackspacePress

export function Keyboard({hiddenWord, selectedWords, setSelectedWords, enteredLetters, setEnteredLetters}){
    // let lettersData = enteredLetters.length === 5 ? enteredLetters.split('') : [...enteredLetters, ...new Array(5 - enteredLetters.length).fill('')]

    // const quntityHiddenLetters = defenitionQuantityLetter(lettersData.join(''))
    // const quantityEnteredLetter = defenitionQuantityLetter(enteredLetters)
    
    const handleClickKey = (key) =>{
        setEnteredLetters(enteredLetters + key)
    }

    const handleClickEnter = () =>{
        setSelectedWords([...selectedWords, enteredLetters])
        setEnteredLetters('')
    }

    const handleClickDelete = () => {
            setEnteredLetters(prev => prev.slice(0, -1))
    }
    return (<div className="keyboard">
        {
            keys.map((key, index) => {
                return <button className={cn({
                     key : true,
                    // noneLetterInWord: false,
                    // hasLetterInWord: isLetterInWord(key, quntityHiddenLetters, quantityEnteredLetter),
                    // exactPositionLeeterInWord: defenitionLetterPosition(hiddenWord, index, key)
                })}
                key={index}
                onClick={() => handleClickKey(key)}
                disabled={enteredLetters.length >= 5 || selectedWords.length === 6}
                >{key.toUpperCase()}</button>
            })
        }
        <button 
            onClick={handleClickEnter}
            disabled={enteredLetters.length < 5 || selectedWords.length === 6}
        >
            ENTER
        </button>

        <button 
            onClick={handleClickDelete}
            disabled={enteredLetters.length === 0 || selectedWords.length === 6}
        >
                DELETE</button>
    </div>)
}