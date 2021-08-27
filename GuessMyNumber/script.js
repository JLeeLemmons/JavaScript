'use strict';
//practice on utilizing the DOM

//number that user is guessing for 
let secretNumber = Math.trunc(Math.random() * 20) +1;

//variable for current score upon guesses.
let currentScore = 20;  

let highScore = 0; 

const displayMessage = function(message){
    document.querySelector('.message').textContent = message; 
}

//listens to an event on JS, in this case, a click and what happens when this element is clicked? A function is called! 2 things going on here... there is an eventlistener, that is 'listening' for the click of the 'check' button and there is also an event handler that, as a result of the event listener is handling this event. 
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); 
    // console.log(guess, typeof guess); 

    //when there is no guess, but clicking the check box occured. 
    if(!guess){
        displayMessage('⛔️ No number has been inputted!'); 

    //If player won
    }else if (guess === secretNumber) {
        displayMessage('🥳 Correct Number!'); 
        document.querySelector('body').style.backgroundColor = '#5F9EA0'; 
        document.querySelector('.number').style.width = '30rem'; 
        document.querySelector('.number').textContent = secretNumber; 

        //maintaing highest score
        if(currentScore > highScore){
            highScore = currentScore; 
            document.querySelector('.highscore').textContent = highScore; 
        }
    }else if (guess !== secretNumber) {
        if(currentScore > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Your guess is too high!!' : '📉 Your guess is too low!'; 
            currentScore --; 
            document.querySelector('.score').textContent = currentScore; 
        }else{ 
            displayMessage('🤡 You LOSE!'); 
            currentScore--; 
            document.querySelector('.score').textContent = currentScore; 
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    displayMessage('Start guessing...'); 
    secretNumber = Math.trunc(Math.random() * 20) +1;
    document.querySelector('.number').textContent ='?'; 
    document.querySelector('.number').style.width = '15rem'; 
    document.querySelector('body').style.backgroundColor = '#222';
    currentScore = 20; 
    document.querySelector('.score').textContent = currentScore; 
    document.querySelector('.guess').value =' '; 
})