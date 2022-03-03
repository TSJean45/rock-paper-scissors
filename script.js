const compChoiceDisp = document.querySelector('#compChoice')
const userChoiceDisp = document.querySelector('#userChoice')
const resultDisp = document.querySelector('#result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let compChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice=e.target.id
    userChoiceDisp.innerHTML=userChoice
    generateCompChoice()
    getResult()
}))


function generateCompChoice(){
    const randomNum = Math.floor(Math.random()*possibleChoice.length) + 1
    
    if(randomNum===1){
        compChoice='rock'
    }
    else if(randomNum===2){
        compChoice='paper'
    }
    else if(randomNum===1){
        compChoice='scissors'
    }

    compChoiceDisp.innerHTML=compChoice;

}

function getResult(){
    if(compChoice===userChoice){
        result="It's a draw"
    }
    else if(compChoice==='rock' && userChoice==='paper'){
        result="You win"
    }
    else if(compChoice==='paper' && userChoice==='rock'){
        result="You lose"
    }
    else if(compChoice==='rock' && userChoice==='scissors'){
        result="You lose"
    }
    else if(compChoice==='scissors' && userChoice==='rock'){
        result="You win"
    }
    else if(compChoice==='paper' && userChoice==='scissors'){
        result="You win"
    }
    else if(compChoice==='scissors' && userChoice==='paper'){
        result="You lose"
    }

    resultDisp.innerHTML=result
}

