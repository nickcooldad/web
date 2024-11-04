import { LineOfWords } from "../lineOfWords/lineOfWords"
import './tabbleOfWords.css'
export function TableOfWords({selectedWords, enteredLetters, hiddenWord}){
console.log(selectedWords)
    const wordsData = selectedWords.length === 6 ? selectedWords
     : [...selectedWords, ...new Array(6 - selectedWords.length).fill(null)]
    
    return (
        <table className="table">
            <tbody>
                {
                    wordsData.map(word => {
                        return <LineOfWords
                        word={word}
                        selectedWords={selectedWords}
                        enteredLetters={enteredLetters}
                        hiddenWord={hiddenWord}  
                        />
                    }
                    )
                }
            </tbody>
        </table>
    )
}