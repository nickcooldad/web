import { LineOfWords } from "../lineOfWords/lineOfWords"
import { LineEnteredWords } from "../lineEnteredWord/lineEnteredWords"
import { EmptyLineWord } from "../emptyLineWord/emptyLineWord"
import './tabbleOfWords.css'

export function TableOfWords({selectedWords, enteredLetters, hiddenWord}){
    const emptyLine = selectedWords.length <= 6 ? [new Array(5 - selectedWords.length)] : []
    return (
        <table className="table">
            <tbody>
                {
                    selectedWords.map((word, index) => {
                        return <LineOfWords
                        key={index}
                        word={word}
                        selectedWords={selectedWords}
                        enteredLetters={enteredLetters}
                        hiddenWord={hiddenWord}
                        />
                    }
                    )
                }
                {
                    <LineEnteredWords
                        enteredLetters={enteredLetters}/>
                }
                {
                    emptyLine.map(el => {
                        return <EmptyLineWord/>
                    })
                }

            </tbody>
        </table>
    )
}