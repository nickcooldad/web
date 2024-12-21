export function counter (state = 0, action){
    switch(action.type){
        case('increment') : {
            return state += 1
        }
        case('dicrement') : {
            return state -= 1
        }
        default : return state
    }
}