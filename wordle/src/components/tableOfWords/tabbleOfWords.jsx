import { LineOfWords } from "../lineOfWords/lineOfWords"
import { LineEnteredWords } from "../lineEnteredWord/lineEnteredWords"
import { EmptyLineWord } from "../emptyLineWord/emptyLineWord"
import './tabbleOfWords.css'


export function TableOfWords({selectedWords, enteredLetters, hiddenWord}){

    const enteredLine = selectedWords.length < 6 ? [''] : []
    const emptyLine = (selectedWords.length + enteredLine.length) < 6 ? new Array(6 - selectedWords.length - enteredLine.length).fill('') : []

    return (
        <table className="table">
            <tbody>
                {
                    selectedWords.map((word, index) => {
                        return <LineOfWords
                        key={index}
                        word={word}
                        hiddenWord={hiddenWord}
                        />
                    }
                    )
                }
                {
                    enteredLine.map(_ =>{
                        return <LineEnteredWords
                        enteredLetters={enteredLetters}/>
                    })
                    
                }
                {
                    emptyLine.map(_ => {
                        return <EmptyLineWord/>
                    })
                }
            </tbody>
        </table>
    )
}