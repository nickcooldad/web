import { keys1 } from '../keyboard'
import cn from 'classnames'
import './topLine.css'

export function TopLine({letter2status, onLetterPress}){
    return (<div>
        {
            keys1.map((key, index) => {
                return <button
                key={index}
                className={cn('keyTop', letter2status[key])
                }
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