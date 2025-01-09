const userInpEl = document.querySelector('#user-input');
const submitBtn = document.querySelector('#submitBtn');
const newGameBtn = document.querySelector('#newGameBtn');
const msgContainer = document.querySelector('.msg-box');
const msgEl = document.querySelector('#msg');
const userGuessEl = document.querySelector('#userGuess');
const form = document.querySelector('form');
let guessValue = Math.floor(Math.random() * 100 + 1);
 

let userValArr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msgContainer.classList.remove('hidden');
  let userValue = +userInpEl.value;
  userValArr.push(userValue);
  userGuessEl.innerHTML = `Your guesses: ${userValArr.join(', ')}`;
 
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
  // userInpEl.value = '';
  form.reset();
});

newGameBtn.addEventListener('click', () => {
  guessValue = Math.floor(Math.random() * 100 + 1);
  // userInpEl.value = '';
  form.reset();
  userValArr = [];
  userGuessEl.innerText = '';
  submitBtn.disabled = false;
  newGameBtn.setAttribute('disabled', true);
  msgContainer.classList.add('hidden');

  msgEl.style = `color: #0369A1;

              font-weight: 700;`;

  userGuessEl.style.color = 'black';
  msgContainer.style.backgroundColor = 'white';
  userInpEl.focus()
});
