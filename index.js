
const rockPaperScissors = ["Rock","Paper","Scissors"]
let isPlaying = true
let credits = 100
let randomItem = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)].toUpperCase()
const startEl= document.getElementById("start-btn")
const userEl = document.getElementById("user-txt")
userEl.textContent += credits
const computerEl = document.getElementById("computer-txt")
const titleEl = document.getElementById("title-el")

const body = document.getElementsByTagName('body')
const mainBox = document.getElementById('box')

let rounds = 0



function computerItem(){
    if (rounds<6){
        isPlaying = true
        randomItem = rockPaperScissors[Math.floor(Math.random()*(rockPaperScissors.length-1))].toUpperCase()
        computerEl.textContent = `The Computer: ${randomItem}`
    }  
    else if(rounds>=6){ 
        isPlaying = false     
        titleEl.textContent = `5 rounds finished, do you want to restart again?`
        userEl.textContent = `Your money: $ ${credits}`
        computerEl.textContent = `The Computer: `
    }
}


function computerPlay (playerSelection, computerSelection){
    if(isPlaying===true){
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
        userEl.textContent = `Your money: $ ${credits}`  
    }
}


//ROCK
const buttonRock = document.createElement('button')
buttonRock.textContent = "ROCK"
buttonRock.setAttribute('id', 'buttonRock')

buttonRock.addEventListener('click', ()=>{
    let playerItem = rockPaperScissors[0].toUpperCase()
    rounds += 1
    console.log(rounds)
    computerItem()
    computerPlay(playerItem,randomItem)
})


//PAPER
const buttonPaper = document.createElement('button')
buttonPaper.textContent = "PAPER"
buttonPaper.setAttribute('id', 'buttonPaper')

buttonPaper.addEventListener('click', ()=>{
    let playerItem = rockPaperScissors[1].toUpperCase()
    rounds += 1
    console.log(rounds)
    computerItem()
    computerPlay(playerItem,randomItem)
})


//SCISSORS
const buttonScissors = document.createElement('button')
buttonScissors.textContent = "SCISSORS"
buttonScissors.setAttribute('id', 'buttonScissors')

buttonScissors.addEventListener('click', ()=>{
    let playerItem = rockPaperScissors[2].toUpperCase()
    rounds += 1
    console.log(rounds)
    computerItem()
    computerPlay(playerItem,randomItem)
})



//RESTART
const restartBtn = document.createElement('button')
restartBtn.textContent= "RESTART"
restartBtn.setAttribute('id', 'restart-btn')
restartBtn.addEventListener('dblclick', ()=> restartGame())

function restartGame(){
    if (isPlaying===false){
    isPlaying = true
    rounds = 0
    titleEl.textContent = `Rock, Paper, Scissors`
    computerEl.textContent = `The Computer: `    
    }
}

mainBox.appendChild(buttonRock)
mainBox.appendChild(buttonPaper)
mainBox.appendChild(buttonScissors)
mainBox.appendChild(restartBtn)

















