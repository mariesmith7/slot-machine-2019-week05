let displayAmount = 1000;
let bet = 0;
document.getElementById("displayAmount").innerText = `$${displayAmount}`;

//button eventListeners 
document.querySelector("#spinButton").addEventListener('click', spinSlots);
document.querySelector("#resetButton").addEventListener('click', resetGame);
document.querySelector("#minBet").addEventListener('click', minBetAmount);
document.querySelector("#maxBet").addEventListener('click', resetGame);


// fuction for bet min & max
let minBet = 5;
let maxBet = 50;

function minBetAmount() {
  if (displayAmount >= minBet){
    displayAmount -= minBet;
    document.getElementById("displayAmount").innerText = `$${displayAmount}`;
  }
}

function maxBetAmount() {
  if (displayAmount >= maxBet) {
    displayAmount -= maxBet;
    document.getElementById("displayAmount").innerText = `$${displayAmount}`;
  }
}



//functions for image display on slot machine reel 
function getRandomImages(){
  let randomNum = Math.floor(Math.random() * 5) + 1;
  let imagePath = "";

  //conditions = (arguments applies below)
  if (randomNum === 1) {
    imagePath = "img/cupcake.png"
  } else if (randomNum === 2){
    imagePath = "img/dragonfruit.png"
  } else if (randomNum === 3) {
    imagePath = "img/heart.png"
  } else if (randomNum === 4) {
    imagePath = "img/number7.png"
  } else {
    imagePath = "img/strawberry.png"
  }
  return imagePath;
}

//function for spinSlot
function spinSlots() {
let reel1 = getRandomImages();
let reel2 = getRandomImages();
let reel3 = getRandomImages();

document.getElementById("reel1").innerHTML = `<img src='${reel1}' alt='slot images'>`
document.getElementById("reel2").innerHTML = `<img src='${reel2}' alt='slot images'>`
document.getElementById("reel3").innerHTML = `<img src='${reel3}' alt='slot images'>`

checkWin(reel1, reel2, reel3);
}



// function to check the win//
function checkWin (reel1, reel2, reel3) {
  if (reel1 === reel2 && reel2 === reel3) {
    displayAmount += 50;
    displayCompleteMessage ("You got it, you won!");
  } else {
    displayAmount -= 5;
    displayCompleteMessage ("Try again");
  }
  document.getElementById('displayAmount').innerText = `$${displayAmount}`;
}




// function to display the completed message
function displayCompleteMessage (message) {
  document.getElementById("result").innerText = message;
}



//function to restart//
function resetGame(){
  let displayAmount = 1000;
  
  document.getElementById("displayAmount").innerText = displayAmount;
  document.getElementById("result").innerText = ('')
  document.getElementById("reel1").innerHTML = ''
  document.getElementById("reel2").innerHTML = ''
  document.getElementById("reel3").innerHTML = ''
  document.querySelector("#resetButton").onclick = resetGame;
}




