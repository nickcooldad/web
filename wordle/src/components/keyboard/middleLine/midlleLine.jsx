import { keys2 } from '../keyboard'
import './middleLine.css'
import cn from 'classnames'
export function MiddleLine({letter2status, onLetterPress}){
    return (<div>
        {
            keys2.map((key, index) => {
                return <button
                key={index}
                className={cn('keyMiddle', letter2status[key])}
                onClick={() => onLetterPress(key)}
                >
                    {
                        key.toUpperCase()
                    }
                </button>
            })
        }
    </div>)
}