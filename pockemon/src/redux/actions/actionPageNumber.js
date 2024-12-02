export function enteredSelectPage(sizeSelect){
    return {
        type : 'pageSelect',
        sizeSelect
    }
} 

export function enteredPageNext(){
    return {
        type : 'nextPage',
    }
}

export function enteredPageBack(){
    return {
        type : 'backPage',
    }
}