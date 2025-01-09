const userInpEl = document.querySelector('#user-input');
const submitBtn = document.querySelector('#submitBtn');
const newGameBtn = document.querySelector('#newGameBtn');
const msgContainer = document.querySelector('.msg-box');
const msgEl = document.querySelector('#msg');
const userGuessEl = document.querySelector('#userGuess');
const form = document.querySelector('form');
let guessValue = Math.floor(Math.random() * 100 + 1);
 

let userValArr = [];
let count=0;
form.addEventListener('submit', (e) => {
  count++;
  e.preventDefault();
  msgContainer.classList.remove('hidden');
  let userValue = +userInpEl.value;
  userValArr.push(userValue);
  userGuessEl.innerHTML = `Your guesses: ${userValArr.join(', ')}`;
 
  if(count>=7){
  
    msgEl.innerText = `You Lost the game!`;
    msgEl.style = `color:rgb(255, 255, 255);
    font-weight: 700;`;
    msgContainer.style.backgroundColor = 'red';
    userGuessEl.style.color = 'white';
    submitBtn.setAttribute('disabled', true);
    newGameBtn.disabled=false;
    userValArr = [];
    count=0;
    userInpEl.value = '';
    newGameBtn.focus()
    
  } else{

  if (userValue === guessValue) {
 
    msgEl.innerText = `Congrats! You guess the right number`;
    msgEl.style.color = 'white';
    userGuessEl.style.color = 'white';
    msgContainer.style.backgroundColor = 'green';
    submitBtn.setAttribute('disabled', true);
    newGameBtn.disabled = false;
    newGameBtn.focus()
  } else if (userValue < guessValue) {
    msgEl.innerText = `Too low!`;
  } else {
    msgEl.innerText = `Too High!`;
  }
  form.reset();
}
 


 
});



newGameBtn.addEventListener('click', () => {
  guessValue = Math.floor(Math.random() * 100 + 1);
  userGuessEl.innerText = '';
  msgContainer.classList.add('hidden');
  msgEl.style = `color: #0369A1;
  font-weight: 700;`;
  msgContainer.style.backgroundColor = 'white';
  submitBtn.disabled = false;
  newGameBtn.setAttribute('disabled', true);
  userGuessEl.style.color = 'black';
  // resetGame()

  form.reset();
  userValArr = [];
  count=0;
  userInpEl.focus()
});

 