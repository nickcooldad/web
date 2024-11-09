

//   export function defenitionLetterPosition(hiddenWord, index, letter){
//     return hiddenWord[index] === letter
//   }

//   export function isLetterInWord(letter, quantityHiddenLetter, quantityEnteredLetter){
//     if(quantityHiddenLetter[letter] !== undefined && quantityHiddenLetter[letter].quantity > 0){
//       quantityHiddenLetter[letter].quantity -= 1
//       if(quantityEnteredLetter[letter] !== undefined){
//       return  !quantityEnteredLetter[letter].index.some(id => quantityHiddenLetter[letter].index.includes(id) && quantityHiddenLetter[letter].quantity !== 1)}
//     }
//     return false
//   }
  
//  export  function defenitionQuantityLetter(word){
//     const result = {}
//     word.split('').forEach((letter, index) => {
//         result[letter] ??= {quantity : 0, index : []}
//         result[letter].quantity += 1
//         result[letter].index.push(index)
//     })
//     return result
//   }

 //present(желтый), correct(зеленый), absent(серый)
export function defenitionLetterColor (hiddedWord, selectedWord){
  return selectedWord.split('').map((letter, index) => {
    if(hiddedWord[index] === letter){
      return 'correct'
    }
    if(!hiddedWord.includes(letter)){
      return 'absent'
    }
    return 'present'
  })
}

