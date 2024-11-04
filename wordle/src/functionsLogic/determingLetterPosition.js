//приходит загаданное слово, выбранные буквы, необходимо вернуть есть ли буква и на своем ли она месте

export function determingLetterPosition(hiddenWord, index, letter){
    return hiddenWord[index] === letter
}

export function isLetterInWord(hiddenWord, index,  letter){
    return hiddenWord.includes(letter)
}
  const hiddenWord = 'peace'
 //['sport', 'greed', 'eagle', 'award', 'salad', 'peace']

 
//У НАС ЕСТЬ СЛОВО если буква в слове есть  