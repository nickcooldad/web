//приходит загаданное слово, выбранные буквы, необходимо вернуть есть ли буква и на своем ли она месте

  export function defenitionLetterPosition(hiddenWord, index, letter){
    return hiddenWord[index] === letter
  }

  export function isLetterInWord(hiddenWord, index, letter, quantityLetter){
    console.log(quantityLetter)
    if(quantityLetter[letter] !== undefined && quantityLetter[letter].quantity > 1) {
        quantityLetter[letter].quantity -= 1
        return !quantityLetter[letter].index.some(el => el === index)
    }
    if(quantityLetter[letter] !== undefined && quantityLetter[letter].quantity === 1){
      quantityLetter[letter].quantity -= 1
      return true
    }
    return false
  }
  

  export function defenitionQuantityLetter(word){
    const result = {}
    word.split('').forEach((letter, index) => {
        result[letter] ??= {quantity : 0, index : []}
        result[letter].quantity += 1
        result[letter].index.push(index)
    })
    return result
  }


 //['sport', 'greed', 'eagle', 'award', 'salad', 'peace']

 
//У НАС ЕСТЬ СЛОВО если буква в слове есть  

//1 - если буква есть в слове (желтым)
//2 - если буква стоит на своем месте (зеленным)
//3 - если несколько букв есть в слове но одна из них стоит на своем месте (выделяется та что стоит на своем месте зеленным)
//4 - если буква в загаданном слове 1, а в вводимом две (выделяется первая желтым)
//5 - если букв в загаданном слове 2, а в вводимом одна стоит на своем месте а другая нет (та которая на своем месте зеленным а другая желтым)