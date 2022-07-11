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
const fiveRounds = ["FIRST ROUND","SECOND ROUND", "THIRD ROUND", "FOURTH ROUND", "LAST ROUND"]
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
        renderUserImages(playerItem)
        renderComputerImages(randomItem)
    }
    else if(isPlaying===false){
        titleEl.textContent = `Game Over B****`
        userEl.textContent = `Your credits: $ ${credits}`
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
    computerEl.textContent = `The Computer: `    
    click = -1
    startEl.textContent = `Start Game`
    container1El.innerHTML = " "
    container2El.innerHTML = " "
    }
    
})

//render images
const imgs = ["images/rock.jpg","images/paper.jpg","images/scissors.jpg"]
const container1El= document.getElementById("container1")
const container2El= document.getElementById("container2")
function renderUserImages(playerImg){
    let imgsUser = ""
    if(playerImg==="ROCK"){
        imgsUser +=`<img class="item-img" src="images/rock.jpg">`
    } else if(playerImg==="PAPER"){
        imgsUser += `<img class="item-img" src="images/paper.jpg">`
    } else if (playerImg==="SCISSORS"){
        imgsUser += `<img class="item-img" src="images/scissors.jpg">`
    }
    container1El.innerHTML = imgsUser

}

function renderComputerImages(computerImg){
    let imgsComputer = ""
    if(computerImg==="ROCK"){
        imgsComputer +=`<img class="item-img" src="images/rock.jpg">`
    } else if(computerImg==="PAPER"){
        imgsComputer += `<img class="item-img" src="images/paper.jpg">`
    } else if (computerImg==="SCISSORS"){
        imgsComputer += `<img class="item-img" src="images/scissors.jpg">`
    }
    container2El.innerHTML = imgsComputer

}
//estas dos funcione pueden ir juntas

