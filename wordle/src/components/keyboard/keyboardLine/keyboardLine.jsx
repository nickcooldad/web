
import cn from 'classnames'
import s from  './keyboardLine.module.css'
export function KeyboardLine({letter2status, onLetterPress, keys, before, after}){

    return (<div>
        {before}
        {
            keys.map((key, index) => {
                return <button
                key={index}
                className={cn(s.keyLine, s[letter2status[key]])
                }
                onClick={() => onLetterPress(key)}
                 >
                    {
                        key.toUpperCase()
                    }
                </button>
            })
        }
        {after}
    </div>)

}