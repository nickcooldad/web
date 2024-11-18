
import { useEffect } from "react"
import { KeyboardLine } from "./keyboardLine/keyboardLine"
import { keys1, keys2, keys3 } from "./keyboard"
import s from './keyboard.module.css'


export function Keyboard({ letter2status, onLetterPress, onEnterPress, onBackspacePress }) {

    useEffect(() => {

        const hadleKeyDown = (e) => {
          const key = e.key.toLowerCase()
    
          if(/^[a-z]$/.test(key)){
            onLetterPress(key)
          }
    
          else if(key === 'enter'){
            onEnterPress()
          }
    
          else if(key === 'backspace'){
            onBackspacePress()
          }
        }
    
        window.addEventListener('keydown', hadleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', hadleKeyDown)
        }

      }, [])


    return <div className="keyboard">
        <KeyboardLine
            letter2status={letter2status}
            onLetterPress={onLetterPress}
            keys={keys1}
        />

        <KeyboardLine
            letter2status={letter2status}
            onLetterPress={onLetterPress}
            keys={keys2}
        />

        <KeyboardLine
            letter2status={letter2status}
            onLetterPress={onLetterPress}
            keys={keys3}
            after={(
                <button
                    className={s.enter}
                    onClick={onEnterPress}>
                    ENTER
                </button>
            )}
            before={(
                <button
                    className={s.delete}
                    onClick={onBackspacePress}
                >DELETE</button>
            )}
        />
    </div>
}