'use strict';
//practice on utilizing the DOM

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.score').textContent = '20'; 
// document.querySelector('.number').textContent = '10';  
// document.querySelector('.guess').value = '23'; 
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) +1;

//number that user is guessing for 
document.querySelector('.number').textContent = secretNumber; 

//variable for current score upon guesses.
let currentScore = 20; 



//listens to an event on JS, in this case, a click and what happens when this element is clicked? A function is called! 2 things going on here... there is an eventlistener, that is 'listening' for the click of the 'check' button and there is also an event handler that, as a result of the event listener is handling this event. 
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); 
    // console.log(guess, typeof guess); 

    //when there is no guess, but clicking the check box occured. 
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number has been inputted!';
        
    //If player won
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🥳 Correct Number!';
    }else if(guess > secretNumber){
        if(currentScore > 1){
            document.querySelector('.message').textContent = '📈 Your guess is too high!!'; 
            currentScore --; 
            document.querySelector('.score').textContent = currentScore; 
        }else{
            document.querySelector('.message').textContent = '🤡 You LOSE!'; 
            currentScore--; 
            document.querySelector('.score').textContent = currentScore; 
        }
    }else{
        if(currentScore > 1){
            document.querySelector('.message').textContent = '📉 Your guess is too low!'; 
            currentScore--; 
            document.querySelector('.score').textContent = currentScore; 
        }else{
            document.querySelector('.message').textContent = '🤡 You LOSE!'; 
            currentScore--; 
            document.querySelector('.score').textContent = currentScore; 
            
        }
        
    }
})