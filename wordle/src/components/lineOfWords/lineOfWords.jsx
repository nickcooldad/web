import cn from "classnames"
import './lineOfWords.css'
import { defenitionLetterPosition, isLetterInWord, defenitionQuantityLetter} from "../../functionsLogic/defenitionLetterPosition"
import { useState } from "react"

export function LineOfWords({word, enteredLetters, hiddenWord, quantityLetter}){

let lettersData = word.length === 5 ? word.split('') : new Array(5).fill('')
return (
    <tr>
      {
        lettersData.map((letter, index) => { 
          return <td 
          key={index}
          className={cn({
            cell:true,
            hasLetter : isLetterInWord(index, letter, quantityLetter),
            exactPosition :defenitionLetterPosition(hiddenWord, index, letter),
          })}
          >{
            letter.toUpperCase()
            }</td>
        })
      }
    </tr>)
}