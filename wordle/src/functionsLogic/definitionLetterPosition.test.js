import {defenitionQuantityLetter, isLetterInWord } from "./defenitionLetterPosition";


describe('Определение позиции буквы в слове', () => {

    const hiddenWord = 'peace'
    test('Одна буква находится в слове не на своем месте', ()=>{
        const enteredWord = 'sport'
        const test =  enteredWord.split('').map((item, index )=> {
            return isLetterInWord(index, item, defenitionQuantityLetter(hiddenWord) )
          })
        expect(test).toEqual([false, true, false, false, false])
    }) 

    test('В введенем слове две одинаковые буквы, и одна из них на своем месте, а в загаданном две', ()=>{
        const enteredWord = 'eagle'
        const test =  enteredWord.split('').map((item, index )=> {
            return isLetterInWord(index, item, defenitionQuantityLetter(hiddenWord) )
          })
        expect(test).toEqual([true, true, false, false, false])
    })

    test('В вводимом слове, две буквы, не на своих местах, а в загаданном одна', ()=>{
        const enteredWord = 'salad'
        const test =  enteredWord.split('').map((item, index )=> {
            return isLetterInWord(index, item, defenitionQuantityLetter(hiddenWord) )
          })
        expect(test).toEqual([false, true, false, false, false])
    })

    test('В вводимом слове, две буквы, одна из них на своем месте , а в загаданном одна', ()=>{
        const enteredWord = 'award'
        const test =  enteredWord.split('').map((item, index )=> {
            return isLetterInWord(index, item, defenitionQuantityLetter(hiddenWord) )
          })
        expect(test).toEqual([false, false, false, false, false])
    })
})