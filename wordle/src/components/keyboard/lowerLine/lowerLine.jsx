import { keys3 } from '../keyboard'
import './lowerLine.css'
import cn from 'classnames'
export function LowerLine({letter2status, onLetterPress, onEnterPress, onBackspacePress}){
    return (<div>
        <button
        className='enter'
        onClick={onEnterPress}>
            ENTER
        </button>
        {
            keys3.map((key, index) => {
                return <button
                key={index}
                className={cn('keyLower', letter2status[key])}
                onClick={() => onLetterPress(key)}>
                    {
                        key.toUpperCase()
                    }
                </button>
            })
        }
        <button
        className='delete'
        onClick={onBackspacePress}
        >DELETE</button>
    </div>)
} 

