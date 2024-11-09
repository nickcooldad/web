import {defenitionQuantityLetter, isLetterInWord , defenitionLetterColor} from "./defenitionLetterPosition";


describe('Определение позиции буквы в слове', () => {

    const hiddenWord = 'peace'


      test('Введенная буква находится в слове не на своем месте', () => {
        const result = defenitionLetterColor(hiddenWord, 'sport')
        //present(желтый), correct(зеленый), absent(серый)
        expect(result).toEqual(['absent', 'present', 'absent', 'absent', 'absent'])
      })
      
      test('Введены 2 буквы, которые есть в загаданном слове, но не на своих местах', () => {
        const result = defenitionLetterColor(hiddenWord, 'greed')
        //present(желтый), correct(зеленый), absent(серый)
        expect(result).toEqual(['absent', 'absent', 'present', 'present', 'absent'])
      })



    // test('Введенная буква находится в слове', ()=>{
    //     const enteredWord = 'sport'
    //     const quantityHiddenLetter = defenitionQuantityLetter(hiddenWord)
    //     const quantityEnteredLetter = defenitionQuantityLetter(enteredWord)
    //     const result =  enteredWord.split('').map((item)=> {
    //         return isLetterInWord(item, quantityHiddenLetter, quantityEnteredLetter)
    //       })
    //     expect(result).toEqual([false, true, false, false, false])
    // }) 

    // test('Из двух букв первая на своем месте, вторая находится в загаднном слове', ()=>{
    //     const enteredWord = 'eagle'
    //     const quantityHiddenLetter = defenitionQuantityLetter(hiddenWord)
    //     const quantityEnteredLetter = defenitionQuantityLetter(enteredWord)
    //     const result =  enteredWord.split('').map((item)=> {
    //         return isLetterInWord(item, quantityHiddenLetter, quantityEnteredLetter)
    //       })
    //     expect(result).toEqual([true, true, false, false, false])
    // })

    // test('Из двух одинаковых букв, только одна находится в загаднном слове', ()=>{
    //     const enteredWord = 'salad'
    //     const quantityHiddenLetter = defenitionQuantityLetter(hiddenWord)
    //     const quantityEnteredLetter = defenitionQuantityLetter(enteredWord)
    //     const result =  enteredWord.split('').map((item)=> {
    //         return isLetterInWord(item, quantityHiddenLetter, quantityEnteredLetter)
    //       })
    //     expect(result).toEqual([false, true, false, false, false])
    // })

    // test('Из двух одинаковых букв, одна находится на своем месте, как в загаданном слове', ()=>{
    //     const enteredWord = 'award'
    //     const quantityHiddenLetter = defenitionQuantityLetter(hiddenWord)
    //     const quantityEnteredLetter = defenitionQuantityLetter(enteredWord)
    //     const result =  enteredWord.split('').map((item)=> {
    //         return isLetterInWord(item, quantityHiddenLetter, quantityEnteredLetter)
    //       })
    //     expect(result).toEqual([false, false, false, false, false])
    // })
})