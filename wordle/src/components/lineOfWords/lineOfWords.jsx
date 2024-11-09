import cn from "classnames"
import './lineOfWords.css'
import { defenitionLetterColor} from "../../functionsLogic/defenitionLetterPosition"

export function LineOfWords({selectedWords, word, enteredLetters, hiddenWord}){

let lettersData = word.length === 5 ? word.split('') : [...word, ...new Array(5 - word.length).fill('')] 
const colorsLetter = defenitionLetterColor(hiddenWord, word)

console.log(selectedWords.indexOf(enteredLetters))
return (
    <tr>
      {
        lettersData.map((letter, index) => { 
          return <td 
           key={index}
           className={cn('cell', colorsLetter[index])} 
          >{
            letter.toUpperCase()
            }</td>
        })
      }
    </tr>)
}