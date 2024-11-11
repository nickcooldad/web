import './modalWindow.css'

export function ModalWindow({condition}){
    return (
    <div className="modal-overlay">
        <div className="modal">
            {condition ? 'You win' : 'You los'}
        </div>
    </div>)
}