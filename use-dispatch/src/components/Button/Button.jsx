import { increment, dicrement } from "../../redux/actions"
import { useDispatch } from "../../react-redux"

export function Button(){

    const dispatch = useDispatch()
    
    return <div>
        <button onClick={() => dispatch(increment())}>{'+'}</button>
        <button onClick={() => dispatch(dicrement())}>{'-'}</button>
    </div>
    
}