const totalScore = {computerScore:0, playerScore:0}
// ** ComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
    const rpsChoice = ['Rock','Paper','Scissors'] 
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}
// ** Result compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  // return the result of score based on  won, drew, or lost
  let score;
  // All situations where human draws = `score` is 0
  if (playerChoice == computerChoice){
    score = 0
    }
  // All situations where human wins = `score` is  1
    else if (playerChoice =='Rock' && computerChoice=='Scissors'){
    score = 1
    }
    else if (playerChoice =='Paper' && computerChoice=='Rock'){
        score = 1
    }
    else if (playerChoice =='Seassor' && computerChoice=='Paper'){
        score = 1
    }
  // Otherwise human loses = score is -1
    else {
        score = -1
    }

  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
 
 const resultDiv = document.getElementById('result')
 const handsDiv = document.getElementById('hands')
 const playerScoreDiv = document.getElementById('player-score')
  if (score == -1){
    resultDiv.innerText = 'You Loose'
  }else if (score == 0){
    resultDiv.innerText = "It's a tie"
  }else {
    resultDiv.innerText = 'You won'
  }

  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
 playerScoreDiv.innerText = totalScore['playerScore']
}

// ** Calculates who won and show it on the screen **
function onClickRPS(playerChoice){
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice,computerChoice)
    totalScore['playerScore'] += score
    console.log({score})
    console.log({totalScore})
    showResult(score, playerChoice, computerChoice)
}
// **RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
 
  //loops through the buttons using a forEach loop
  rpsButtons.forEach(rpsButton => {
    //Added a 'click' event listener to each button
    //Called the onClickRPS function every time someone clicks
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
  // Added a click listener to the end game button that runs the endGame() function on click
  const GameEnd = document.getElementById('endGameButton')
  GameEnd.onclick = () => endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ' '
    handsDiv.innerText = ' '
    playerScoreDiv.innerText = ' '
}

playGame()