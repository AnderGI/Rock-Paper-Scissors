//array with the picture to render them inside the div and above the image
const rockPaperScissors = ["Rock","Paper","Scissors"]
let isPlaying = true
let credits = 200
let randomItem = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)].toUpperCase()
const startEl= document.getElementById("start-btn")
const restartEl = document.getElementById("restart-btn")
const userEl = document.getElementById("user-txt")
userEl.textContent += credits
const computerEl = document.getElementById("computer-txt")
const titleEl = document.getElementById("title-el")

const images = ["rock.png","paper.png","scissors.png"]
const userImg = document.getElementById("img1")
const computerImg = document.getElementById("img2")

//render images inside div

function renderUserImg(){
    if(playerItem==="ROCK"){ userImg.textContent = `<img class="game-img" src="${images[0]}" alt="rock image">`}
    else if(playerItem==="PAPER"){userImg.textContent = `<img class="game-img" src="${images[1]}" alt="paper image">`}
    else if(playerItem==="SCISSORS"){userImg.textContent = `<img class="game-img" src="${images[2]}" alt="scissors image">`}
}
function renderComputerImg(){
    if(randomItem==="ROCK"){computerImg.textContent = `<img class="game-img" src="${images[0]}" alt="rock image">`}
    else if(randomItem==="PAPER"){computerImg.textContent = `<img class="game-img" src="${images[1]}" alt="paper image">`}
    else if(randomItem==="SCISSORS"){computerImg.textContent = `<img class="game-img" src="${images[2]}" alt="scissors image">`}
}

//once the start-btn in clicked render randomly after the computer: using .textcontent an intem from the rockPaperScissors array
startEl.addEventListener("click", function computerItem(){
    let playerItem = prompt("Rock, Paper or Scissors?", ).toUpperCase()
    randomItem = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)].toUpperCase()
    computerEl.textContent = `The Computer: ${randomItem}`
    computerPlay(playerItem, randomItem)
    userCredits()
    renderUserImg()
    renderComputerImg()

})

//compare the user election and the computers one. MANERA MAS FACIL? SIN HARDCODEAR TANTO?
function computerPlay (playerSelection, computerSelection){
    if(playerSelection==="ROCK" && randomItem==="ROCK"){ 
        titleEl.textContent = `No one wins. Both are equal`
    } 
    else if(playerSelection==="ROCK" && randomItem==="PAPER"){
        titleEl.textContent = `You lose! ${randomItem} beats ${playerSelection}. You lose 25$.`
    }
    else if(playerSelection==="ROCK" && randomItem==="SCISSORS"){
        titleEl.textContent = `You win! ${playerSelection} beats ${randomItem}. You earn 10$.`
    }
    else if(playerSelection==="PAPER" && randomItem==="ROCK"){
        titleEl.textContent = `You win! ${playerSelection} beats ${randomItem}. You earn 10$.`
    }
    else if(playerSelection==="PAPER" && randomItem==="PAPER"){
        titleEl.textContent = `No one wins. Both are equal`
    }
    else if(playerSelection==="PAPER" && randomItem==="SCISSORS"){
        titleEl.textContent = `You lose! ${randomItem} beats ${playerSelection}. You lose 25$.`
    }
    else if(playerSelection==="SCISSORS" && randomItem==="ROCK"){
        titleEl.textContent = `You lose! ${randomItem} beats ${playerSelection}. You lose 25$.`
    }
    else if(playerSelection==="SCISSORS" && randomItem==="PAPER"){
        titleEl.textContent = `You win! ${playerSelection} beats ${randomItem}. You earn 10$.`
    }
    else if(playerSelection==="SCISSORS" && randomItem==="SCISSORS"){
        titleEl.textContent = `No one wins. Both are equal`
    }
}

//function that evaluates the credits of the user

function userCredits(){
    playerItem = prompt("Rock, Paper or Scissors?", ).toUpperCase()
    if(titleEl.textContent === `No one wins. Both are equal`){
        credits = 200

    } else if(titleEl.textContent === `You lose!. ${randomItem} beats ${playerItem}. You lose 25$.`){
        credits = credits - 25

    } else if(titleEl.textContent === `You win!.${playerItem} beats ${randomItem}. You earn 10$.`){
        credits = credits + 10
    }
    userEl.textContent = `Your credits: $ ${credits}`
}

//once the stop-btn is clicked isPlaying = false and everything will return to default values
restartEl.addEventListener("click", function restartGame(){
    titleEl.textContent = `Rock, Paper, Scissors`
    userEl.textContent = `You: `
    computerEl.textContent = `The Computer: `
})