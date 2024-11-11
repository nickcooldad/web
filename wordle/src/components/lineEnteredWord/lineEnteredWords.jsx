import './lineEnteredWords.css'
import cn from 'classnames'
export function LineEnteredWords({enteredLetters}) {
   
    const word = enteredLetters.length <= 5 ? [...enteredLetters, ...new Array(5 - enteredLetters.length).fill('')] : enteredLetters.split('')
    return <tr>
        {
            word.map((letter, index) => {
                return <td 
                className={cn({
                    enteredCell: true,
                    noneCell: letter !== ''
                })}
                key={index}
                > 
                    {letter.toUpperCase()}
                    
                </td>
            })
        }
    </tr>
}