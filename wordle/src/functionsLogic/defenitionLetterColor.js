 //present(желтый), correct(зеленый), absent(серый)
export function defenitionLetterColor (hiddedWord, selectedWord){
  let dataHiddenWord = {}
  let dataSelectedWord = {}

  for(let i = 0; i < hiddedWord.length; i++){
    dataHiddenWord[hiddedWord[i]] ??= {quantity: 0, index : []}
    dataSelectedWord[selectedWord[i]] ??= {quantity: 0, index : []}

    dataHiddenWord[hiddedWord[i]].quantity += 1
    dataHiddenWord[hiddedWord[i]].index.push(i)

    dataSelectedWord[selectedWord[i]].quantity +=1
    dataSelectedWord[selectedWord[i]].index.push(i)
  }

  return selectedWord.split('').map((letter, index) => {
    if(hiddedWord[index] === letter){
      return 'correct'
      
    }
    if(!hiddedWord.includes(letter)){
      return 'absent'
    }
    
    if(dataSelectedWord[letter].index.some(selectedInd => dataHiddenWord[letter].index.includes(selectedInd) 
      && dataSelectedWord[letter].quantity !== dataHiddenWord[letter].quantity)){
      return 'absent'
    }

    if(dataHiddenWord[letter].quantity > 0){
      dataHiddenWord[letter].quantity--
      return 'present'
    }

    return 'absent'
  })
}


export function getLetter2Status (selectedWords, hiddedWord){
  const letters = selectedWords.flatMap(word => 
    defenitionLetterColor(hiddedWord, word).map((color, i) => [word[i], color])
  );

  const entries = ['absent', 'present', 'correct'].flatMap(priority =>
    letters.filter(([_, color]) => color === priority)
  );

  return Object.fromEntries(entries);
  

  // const colorKeys = {}
  // const priorityColorsData ={
  //   'absent' : 1,
  //   'present' : 2,
  //   'correct' : 3, 
  //   1 : 'absent',
  //   2 : 'present',
  //   3 : 'correct'
  // }
  // selectedWords.forEach(word => {
  //   const colors = defenitionLetterColor(hiddedWord, word)

  //   word.split('').forEach((letter, index) => {
  //     const colorKey = colors[index]

  //     if(colorKeys[letter] === undefined){
  //       colorKeys[letter] = colorKey
  //       return
  //     }
     
  //     const priorityColor = Math.max(priorityColorsData[colorKey],priorityColorsData[colorKeys[letter]])
      
  //     colorKeys[letter] = priorityColorsData[priorityColor]
  //   })
  // })

  // return colorKeys
}

//salad [absent, present, absent, absent, absent] peace
//award [absent, absent, correct, absent, absent] peace
