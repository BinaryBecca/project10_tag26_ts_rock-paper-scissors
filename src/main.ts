import "./assets/css/style.css"

//#Variables
const everythingInsideTheGame = document.getElementById("everythingInsideTheGame") as HTMLDivElement
const playingTheGame = document.getElementById("playingTheGame") as HTMLDivElement
const endResult = document.getElementById("endResult") as HTMLDivElement

const roundCounter = document.getElementById("roundCounter") as HTMLDivElement
const chooseRoundOption = document.getElementById("choooseRoundOption") as HTMLFormElement
const chosenRadioButton = chooseRoundOption.querySelectorAll<HTMLInputElement>('input[type="radio"]') //as HTMLInputElement

const allButtons = document.querySelectorAll<HTMLDivElement>(".iconButtons")

const stoneButton = document.getElementById("stoneButton") as HTMLButtonElement
// const paperButton = document.getElementById("paperButton") as HTMLButtonElement
// const scissorButton = document.getElementById("scissorButton") as HTMLButtonElement

const stoneImage = document.getElementById("stoneImage") as HTMLImageElement
const bobTheStoneImage = document.getElementById("bobTheStoneImage") as HTMLImageElement
const paperImage = document.getElementById("paperImage") as HTMLImageElement
const scissorImage = document.getElementById("scissorImage") as HTMLImageElement
const iconOptions = [stoneImage, paperImage, scissorImage]

const player = document.getElementById("player") as HTMLDivElement
const computer = document.getElementById("computer") as HTMLDivElement
const score = document.getElementById("score") as HTMLDivElement

const scoreResult = document.getElementById("scoreResult") as HTMLDivElement

const restartSection = document.getElementById("restartSection") as HTMLDivElement
const restartButton = document.getElementById("restartButton") as HTMLButtonElement

let playerScoreOfCurrentRound = 0
let computereScoreOfCurrentRound = 0
let currentRound = 0
let selectedRoundOption = 0

//#Choosing number of rounds
playingTheGame.style.display = "none"
restartSection.style.display = "none"
bobTheStoneImage.style.display = "none"
// chooseRoundOption.style.display = "flex"

chosenRadioButton.forEach((radioButton) => {
  // selectedRoundOption = Number(radioButton.value)

  radioButton.addEventListener("click", () => {
    selectedRoundOption = Number(radioButton.value)
    chooseRoundOption.style.display = "none"
    playingTheGame.style.display = "block"
    restartSection.style.display = "block"
    roundCounter.textContent = `${currentRound} / ${selectedRoundOption}`
  })
})

// #function getRandomIconforComputer()
function getRandomIconforComputer(): HTMLImageElement {
  return iconOptions[Math.floor(Math.random() * iconOptions.length)]
}

// #function getBobAtRandom()
const randomImage = [stoneImage, bobTheStoneImage]
function getBobAtRandom(): HTMLImageElement {
  return randomImage[Math.floor(Math.random() * randomImage.length)]
}
// #Bob
// stoneButton.addEventListener("click", () => {
//   const randomStoneImage = getBobAtRandom().cloneNode() as HTMLImageElement
//   player.append(randomStoneImage)
// })

// # choosing winner, showing current score
allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    player.innerHTML = ""
    computer.innerHTML = ""

    const copyImageComputer = getRandomIconforComputer().cloneNode() as HTMLImageElement
    let playerImage = button.querySelector("img").cloneNode() as HTMLImageElement
    // const randomStoneImage = getBobAtRandom().cloneNode() as HTMLImageElement
    // if (button === stoneButton) {
    //   playerImage = getBobAtRandom().cloneNode() as HTMLImageElement
    // }

    player.append(playerImage)
    computer.append(copyImageComputer)
    // ! playerImage === stoneImage ist immer false, weil playerImage ein Klon ist und stoneImage das Original
    // !  src = string mit Bild-URL
    if (playerImage.src === copyImageComputer.src) {
      // ! <img src="${playerImage.src}"> für Bild!!!
      scoreResult.innerHTML = `It was a draw! You both chose <img src="${playerImage.src}">`
    } else if (
      (playerImage.src === randomStoneImage.src && copyImageComputer.src === scissorImage.src) ||
      (playerImage.src === scissorImage.src && copyImageComputer.src === paperImage.src) ||
      (playerImage.src === paperImage.src && copyImageComputer.src === randomStoneImage.src)
    ) {
      playerScoreOfCurrentRound++
      scoreResult.innerHTML = `<img src="${playerImage.src}"> beats <img src="${copyImageComputer.src}">. You win!`
    } else {
      computereScoreOfCurrentRound++
      scoreResult.innerHTML = `<img src="${copyImageComputer.src}"> beats <img src="${playerImage.src}">. You lose!`
    }
    score.textContent = playerScoreOfCurrentRound + ":" + computereScoreOfCurrentRound

    // #showing current round
    currentRound++
    roundCounter.textContent = `${currentRound} / ${selectedRoundOption}`

    // # showing the end result
    if (selectedRoundOption === currentRound) {
      everythingInsideTheGame.style.display = "none"

      if (playerScoreOfCurrentRound > computereScoreOfCurrentRound) {
        return (endResult.innerText = "You won!")
      } else if (playerScoreOfCurrentRound < computereScoreOfCurrentRound) {
        return (endResult.innerText = "You lost!")
      } else {
        return (endResult.innerText = "It's a draw!")
      }
    }
  })
})

// # restart game
restartButton.addEventListener("click", (event) => {
  event.preventDefault()

  window.location.reload()
})

//
//
//
//
//
//
// # function choosingTheWinner()
// let playerScoreOfCurrentRound = 0
// let computereScoreOfCurrentRound = 0

// function choosingTheWinner(playersChosenOption: HTMLImageElement, computersChosenOption: HTMLImageElement) {
//   if (playersChosenOption === computersChosenOption) {
//     scoreResult.textContent = `It was a draw! You both chose ${playersChosenOption}`
//   } else if (
//     (playersChosenOption === stoneImage && computersChosenOption === scissorImage) ||
//     (playersChosenOption === scissorImage && computersChosenOption === paperImage) ||
//     (playersChosenOption === paperImage && computersChosenOption === stoneImage)
//   ) {
//     playerScoreOfCurrentRound++
//     scoreResult.textContent = `${playersChosenOption} beats ${computersChosenOption}. You win!`
//   } else {
//     computereScoreOfCurrentRound++
//     scoreResult.textContent = `${computersChosenOption} beats ${playersChosenOption}. You lose!`
//   }
//   score.textContent = playerScoreOfCurrentRound + ":" + computereScoreOfCurrentRound
// }

// # Results2:
// const copyImageComputer = getRandomIconforComputer().cloneNode() as HTMLImageElement
// const playerImage = document.querySelector("img").cloneNode() as HTMLImageElement
// document = immer nur erstes img

// allButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     player.innerHTML = ""
//     computer.innerHTML = ""

//     const copyImageComputer = getRandomIconforComputer().cloneNode() as HTMLImageElement
//     const playerImage = button.querySelector("img").cloneNode() as HTMLImageElement

//     player.append(playerImage)
//     computer.append(copyImageComputer)

//     choosingTheWinner(playerImage, copyImageComputer)
//   })
// })
