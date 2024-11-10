
import { TopLine } from "./topLine/topLine"
import { MiddleLine  } from "./middleLine/midlleLine"
import { LowerLine } from "./lowerLine/lowerLine"
import './keyboard.css'
import cn from 'classnames'

// letter2status
// onLetterPress
// onEnterPress
// onBackspacePress

export function Keyboard({letter2status, onLetterPress, onEnterPress, onBackspacePress}){
    
    return <div className="keyboard">
        <TopLine
        letter2status={letter2status}
        onLetterPress={onLetterPress}
        />

        <MiddleLine
         letter2status={letter2status}
         onLetterPress={onLetterPress}
         />

        <LowerLine
         letter2status={letter2status}
         onLetterPress={onLetterPress}
         onEnterPress={onEnterPress}
         onBackspacePress={onBackspacePress}
         />
    </div>
    
}