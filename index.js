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
//function that lets the user play only 5 rounds
const fiveRounds = ["First Round","Second Round", "Third Round", "Fourth Round", "Last Round"]
let click = -1

//once the start-btn in clicked render randomly after the computer: using .textcontent an intem from the rockPaperScissors array
startEl.addEventListener("click", function computerItem(){
    click += 1
    if(click <fiveRounds.length){
        startEl.textContent = fiveRounds[click]
    } else if (click >= fiveRounds.length){   
        isPlaying = false
        startEl.textContent = `Game Over`
    }
    if (isPlaying===true){
        let playerItem = prompt("Rock, Paper or Scissors?", ).toUpperCase()
        randomItem = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)].toUpperCase()
        computerEl.textContent = `The Computer: ${randomItem}`
        computerPlay(playerItem, randomItem)
    }
    else if(isPlaying===false){
        titleEl.textContent = `Game Over B****`
        userEl.textContent = `You: `
        computerEl.textContent = `The Computer: `
    }
})

//compare the user election and the computers one. MANERA MAS FACIL? SIN HARDCODEAR TANTO?
//function that evaluates the credits of the user
function computerPlay (playerSelection, computerSelection){ // if both are equal it returs to default value 200$
    if((playerSelection==="ROCK" && randomItem==="ROCK")||(playerSelection==="PAPER" && randomItem==="PAPER")||(playerSelection==="SCISSORS" && randomItem==="SCISSORS")){ 
        titleEl.textContent = `No one wins. Both are equal`
        
    } 
    else if((playerSelection==="ROCK" && randomItem==="PAPER")||(playerSelection==="PAPER" && randomItem==="SCISSORS")||(playerSelection==="SCISSORS" && randomItem==="ROCK")){
        titleEl.textContent = `You lose! ${randomItem} beats ${playerSelection}. You lose 25$.`
        credits = credits - 25
    }
    else if((playerSelection==="ROCK" && randomItem==="SCISSORS")||(playerSelection==="PAPER" && randomItem==="ROCK")||(playerSelection==="SCISSORS" && randomItem==="PAPER")){
        titleEl.textContent = `You win! ${playerSelection} beats ${randomItem}. You earn 10$.`
        credits = credits + 10
    }
    userEl.textContent = `Your credits: $ ${credits}`
}


//once the stop-btn is clicked isPlaying = false and everything will return to default values
restartEl.addEventListener("click", function restartGame(){
    if (isPlaying===false){
    isPlaying = true
    titleEl.textContent = `Rock, Paper, Scissors`
    userEl.textContent = `You: `
    computerEl.textContent = `The Computer: `    
    click = -1
    startEl.textContent = `Start Game`
    }
    
})

