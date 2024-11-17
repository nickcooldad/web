import './modalWindow.css'
import cn from 'classnames'
export function ModalWindow({condition, handleClickAgainPlay}){
    return (
    <div className="modal-overlay">
        <div className="modal">
            {condition ? 'You win' : 'You los'}
            <button 
            className={cn('againWin', {againLose : !condition})}
            onClick={handleClickAgainPlay}
            >Play again?</button>
        </div>
    </div>)
}