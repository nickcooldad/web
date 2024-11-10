import cn from "classnames"
import './lineOfWords.css'
import { defenitionLetterColor} from "../../functionsLogic/defenitionLetterColor"

export function LineOfWords({word, hiddenWord}){
const colorsLetter = defenitionLetterColor(hiddenWord, word)
let lettersData = word.length === 5 ? word.split('') : [...word, ...new Array(5 - word.length).fill('')] 
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