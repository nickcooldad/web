import cn from "classnames"
import './lineOfWords.css'
import { determingLetterPosition, isLetterInWord } from "../../functionsLogic/determingLetterPosition"

export function LineOfWords({word, enteredLetters, hiddenWord}){
  let lettersData = word.length === 5 ? word.split('') : new Array(5).fill('')
return (
    <tr>
      {
        lettersData.map((letter, index) => {
          console.log(letter, index)
          return <td 
          key={index}
          className={cn({
            cell:true,
            hasLetter : isLetterInWord(hiddenWord, index, letter),
            exactPosition : determingLetterPosition(hiddenWord, index, letter),
          })}
          >{
            letter.toUpperCase()
            }</td>
        })
      }
    </tr>)
}