import cn from "classnames"
import './lineOfWords.css'
import { defenitionLetterPosition, isLetterInWord, defenitionQuantityLetter} from "../../functionsLogic/defenitionLetterPosition"

export function LineOfWords({word, enteredLetters, hiddenWord, quantityHiddenLetter}){

let lettersData = word.length === 5 ? word.split('') : new Array(5).fill('')
const quantityEnteredLetter = defenitionQuantityLetter(lettersData.join('')) 
return (
    <tr>
      {
        lettersData.map((letter, index) => { 
          return <td 
           key={index}
          className={cn({
            cell:true,
            hasLetter : isLetterInWord(letter, quantityHiddenLetter, quantityEnteredLetter),
            exactPosition :defenitionLetterPosition(hiddenWord, index, letter),
          })} 
          >{
            letter.toUpperCase()
            }</td>
        })
      }
    </tr>)
}