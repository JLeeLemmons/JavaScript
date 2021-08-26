'use strict';
//practice on utilizing the DOM

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = '🥳 Correct Number!';
// document.querySelector('.score').textContent = '20'; 
// document.querySelector('.number').textContent = '10';  
// document.querySelector('.guess').value = '23'; 
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) +1;

document.querySelector('.number').textContent = number; 

//listens to an event on JS, in this case, a click and what happens when this element is clicked? A function is called! 2 things going on here... there is an eventlistener, that is 'listening' for the click of the 'check' button and there is also an event handler that, as a result of the event listener is handling this event. 
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); 
    console.log(guess, typeof guess); 
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number has been inputted!';
    }
})