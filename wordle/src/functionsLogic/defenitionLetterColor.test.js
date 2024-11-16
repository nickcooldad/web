import { defenitionLetterColor, getLetter2Status} from "./defenitionLetterColor";


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

      test('Введены 2 одинаковых буквы, которые есть в загаданном слове, и одна из них на своем месте', () => {
        const result = defenitionLetterColor(hiddenWord, 'eagle')
        //present(желтый), correct(зеленый), absent(серый)
        expect(result).toEqual(['present', 'present', 'absent', 'absent', 'correct'])
      })

      test('Из двух одинаковых букв, одна находится на своем месте, как в загаданном слове', () => {
        const result = defenitionLetterColor(hiddenWord, 'award')
        //present(желтый), correct(зеленый), absent(серый)
        expect(result).toEqual(['absent', 'absent', 'correct', 'absent', 'absent'])
      })

      test('Из двух одинаковых букв, только одна находится в загаднном слове', () => {
        const result = defenitionLetterColor(hiddenWord, 'salad')
        //present(желтый), correct(зеленый), absent(серый)
        expect(result).toEqual(['absent', 'present', 'absent', 'absent', 'absent'])
      })

})


  describe('Выбор приоритетных цветов', () => {
    test('Буква находится в первом слове не на своем месте, во втором на своем', () => {
      const result = getLetter2Status(['eagle', 'award'], 'peace')

      expect(result).toEqual({
        e : 'correct',
        a : 'correct',
        g : 'absent',
        l : 'absent',
        w : 'absent',
        r : 'absent',
        d : 'absent'
      })

    })
  })