//#✅ Choosing number of rounds_#box1
// #🟥 number of rounds = value  of radio btn!
// #🟥 box1: Showing the current round number
const roundCounter = document.getElementById("roundCounter") as HTMLDivElement
const chooseRoundOption = document.getElementById("choooseRoundOption") as HTMLFormElement

const chosenRadioButton = chooseRoundOption.querySelectorAll<HTMLInputElement>('input[type="radio"]') //as HTMLInputElement

chosenRadioButton.forEach((radioButton) => {
  const optionSelected = radioButton.value

  radioButton.addEventListener("click", () => {
    chooseRoundOption.style.display = "none"
    roundCounter.textContent = `0 / ${optionSelected}`
    //# 🟥 add number of rounds left to /
    //# 🟥 Optional: add blinking icons to show user, where to click
  })
})

// # Results1: #box2:
// #✅ choose random icon for computer
// #✅ making rules (scissor beats paper, paper beats stone, stone beats scissor)
// #✅ Showing the current score (1:1)
// #✅ box3: Showing the result in text-format:
// option1: ${icon} beats ${icon}. You win!
// option2: It was a draw! You both chose ${icon}
// option3: ${icon} beats ${icon}. You lose!

const allButtons = document.querySelectorAll<HTMLDivElement>(".iconButtons")

// const stone = document.getElementById("stoneButton") as HTMLButtonElement
// const paper = document.getElementById("paperButton") as HTMLButtonElement
// const scissor = document.getElementById("scissorButton") as HTMLButtonElement

const stoneImage = document.getElementById("stoneImage") as HTMLImageElement
const paperImage = document.getElementById("paperImage") as HTMLImageElement
const scissorImage = document.getElementById("scissorImage") as HTMLImageElement

const player = document.getElementById("player") as HTMLDivElement
const computer = document.getElementById("computer") as HTMLDivElement
const score = document.getElementById("score") as HTMLDivElement

const scoreResult = document.getElementById("scoreResult") as HTMLDivElement

const iconOptions = [stoneImage, paperImage, scissorImage]

// #function getRandomIconforComputer()
function getRandomIconforComputer(): HTMLImageElement {
  return iconOptions[Math.floor(Math.random() * iconOptions.length)]
}

let playerScoreOfCurrentRound = 0
let computereScoreOfCurrentRound = 0

function choosingTheWinner(playersChosenOption: HTMLImageElement, computersChosenOption: HTMLImageElement) {
  if (playersChosenOption === computersChosenOption) {
    scoreResult.textContent = `It was a draw! You both chose ${playersChosenOption}`
  } else if (
    (playersChosenOption === stoneImage && computersChosenOption === scissorImage) ||
    (playersChosenOption === scissorImage && computersChosenOption === paperImage) ||
    (playersChosenOption === paperImage && computersChosenOption === stoneImage)
  ) {
    playerScoreOfCurrentRound++
    scoreResult.textContent = `${playersChosenOption} beats ${computersChosenOption}. You win!`
  } else {
    computereScoreOfCurrentRound++
    scoreResult.textContent = `${computersChosenOption} beats ${playersChosenOption}. You lose!`
  }
  score.textContent = playerScoreOfCurrentRound + ":" + computereScoreOfCurrentRound
}

// # Results2:
// #🟥 making sure, that if button (stone, paper, scissor) is clicked (addeventlistener), the following is happening:
// calling on functions getRandomIconforComputer() + choosingTheWinner()
// showing chosen icon in player + computer
// #zufällig generiertes image für computer
const computerImage = getRandomIconforComputer()
// # img von btn für player
const playerImage = document.querySelector("img") as HTMLImageElement

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(computerImage)
    if (computer && player) {
      // #img in player & computer anzeigen
      // ! Problem innerHTML = string!
      // ! computerImage, playerImage HTMLImageElement
      computer.innerHTML = computerImage
      player.innerHTML = playerImage

      // computer.appendChild(computerImage)
      // player.appendChild(playerImage)

      // #Gewinner ermitteln
      choosingTheWinner(computerImage, playerImage)
    }
  })
})
