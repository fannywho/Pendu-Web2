const mot = document.querySelector('#mot')
const input = document.querySelector('#lettre')
let hidden = ''
let tentative = 10

const words = [
  'cerise',
  'poire',
  'pomme',
  'abricot'
]

const randomWord = (mots) => {
  const min = Math.ceil(0)
  const max = Math.floor(3)
  const randomNum = Math.floor(Math.random() * (max - min +1)) + min

  return words[randomNum]
}

const wordToFind = randomWord(words)

const hiddenWord = (word) => {
  for (let i = 0; i < word.length; i ++) {
    hidden += '_'
  }

  mot.innerHTML = hidden
}

hiddenWord(wordToFind)

input.addEventListener('keydown', (e) => {
  const guess = input.value

  if(e.keyCode === 13 && guess.length === 1) {
    for (let i = 0; i < wordToFind.length; i++) {
      if (guess === wordToFind[i] && i < wordToFind.length) {
        hiddenTab = hidden.split('')
        hiddenTab[i] = guess
        hidden = hiddenTab.join('')
        mot.innerHTML = hidden
        break
      } else {
        console.log('perdu !')
      }
    }
  }
})
