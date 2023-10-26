let form = document.querySelector('form');
let original = Math.floor(Math.random() * 100 + 1);
// console.log(original);
let userInput=document.querySelector('#guess');
let submit=document.querySelector('#submit');
let previous=document.querySelector('#prev');
let LoworHigh=document.querySelector('.lowOrHigh');
let attempts=document.querySelector('.attempts');
let stratOver=document.querySelector('.game');
let prevguess=[];
let numGuess=10;
let playgame=true;
let p=document.createElement('p');

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        // console.log(guess);
        validateGuesses(guess);
    })
}

function validateGuesses(guess){
    if(isNaN(guess)){
        alert('please enter a valid number ');
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert("Please enter a number less than 100");
    }else{
       prevguess.push(guess);
        if(numGuess===0){
            displayguess(guess)
            displayMassage(`Game Over , Original number
            is ${original}`);
            endGame()
        }else{
            displayguess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    if(guess==original){
        displayMassage(`you gueessed it right`);
        endGame()
    }else if(guess<original){
        displayMassage(`Number is Tooo Low`);

    }else if(guess>original){
        displayMassage(`Number is Tooo high`);
    }

}

function displayguess(guess){
    userInput.value='';
    previous.innerHTML=`${guess}`;
numGuess--;
attempts.innerHTML=`${numGuess}`;
}

function displayMassage(megssege){
LoworHigh.innerHTML=`<h2>${megssege}</h2>`;
}

function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        original=Math.floor(Math.random()*100+1);
        prevguess=[];
        numGuess=10;
        attempts.innerHTML=numGuess;
        userInput.removeAttribute('disabled')
        stratOver.removeChild(p);
        LoworHigh.innerHTML="";
        previous.innerHTML='';
        playgame=true;
    })
}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<button id="newGame">Start new Game</button>`;
    stratOver.appendChild(p);
    playgame=false;
    newGame();
}

