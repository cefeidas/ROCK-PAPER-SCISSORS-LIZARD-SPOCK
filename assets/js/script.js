document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const instructions = document.getElementById('Instructions');
    const roundOne = document.getElementById('roundOne');

    startBtn.addEventListener('click', function () {
        roundOne.classList.remove('hidden');
        instructions.classList.add('hidden');
    });
});

function villainChoice(list1, list2) {
/*This function is a general function that will describe the behavior of the 3 opponents or villains*/
    const combinedList = list1.concat(list2);
    const randomIndex = Math.floor(Math.random() * combinedList.length);
    return combinedList[randomIndex];
  }

/*This would be the behaviour of the first opponent, the disabled pidgeon. Due to the limited intellectual capabilities of birds, it will always be 5 (Spock). The chances of winning against a person are 0%.*/
const result1 = villainChoice([5], []);
console.log("Resultado 1:", result1);

/*This would be the behaviour of the second opponent, the evil dice. Due to its random nature, it will always give a random choice. The chances of winning are 1/5*/
const randomNum = Math.floor(Math.random() * 5) + 1;
const result2 = villainChoice([randomNum], []);
console.log("Result2:")

/*This would be the behaviour of the third opponent, the telepath. This opponent can sometimes read the player's mind. Because of that, it gives a random combination between a random choice and the correct choice. The chances of winning are 3/7. The sense of difficult increases.*/
function telepath(num) {
  switch (num) {
    case 1:
      return [2, 5];
    case 2:
      return [3, 4];
    case 3:
      return [1, 5];
    case 4:
      return [1, 3];
    case 5:
      return [2, 4];
    default:
      return [];
  }
}
const list1 = [1, 2, 3, 4, 5];
const list2 = telepath();
const result3 = villainChoice(list1, list2);
console.log("Resultado 3:", result3)

function whoWins(num1, num2) {
/*I found out that the logic behind this game is: 
If the difference between both numbers is odd, the bigger one wins
If the difference between both numbers is even:
If both numbers are the same, no one wins
If both numbers are not the same, the smaller one wins. Using that, I created the logic to decide the winner.*/
const difference = Math.abs(num1 - num2);
  
if (difference % 2 === 1) { 
  if (num1 > num2) {
    return "You win!";
  } else {
    return "You lose!";
  }
} else { 
  if (num1 === num2) {
    return "Tie!";
  } else if (num1 < num2) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
}

let victories = 0;
let loses = 0;

function gameTracker(result) {
/*Each opponet needs to be defeated 3 times in order to win the round. This functiopn will allow the program to track the number of wins and loses.*/
  if (result === "You win!") {
    victories++;
  } else if (result === "You lose!") {
    loses++;
  }

  if (victories === 3) {
    return "Next Round!";
  } else if (loses === 3) {
    return "Game over";
  } else {
    return `Victories: ${victories}, Loses: ${loses}`;
  }
}

/*In order to feed every function with data, I created the first source of info. It will be player choice, given by pressing any of the numbers available*/
const playerRoundOneChoiceRock = document.getElementById('playerRoundOneChoiceRock')
const playerRoundOneChoicePaper = document.getElementById('playerRoundOneChoicePaper')
const playerRoundOneChoiceScissors = document.getElementById('playerRoundOneChoiceScissors')
const playerRoundOneChoiceLizard = document.getElementById('playerRoundOneChoiceLizard')
const playerRoundOneChoiceSpock = document.getElementById('playerRoundOneChoiceSpock')
const pidgeonRoundOneChoiceRock = document.getElementById("pidgeonRoundOneChoiceRock");
const pidgeonRoundOneChoicePaper = document.getElementById("pidgeonRoundOneChoicePaper");
const pidgeonRoundOneChoiceScissors = document.getElementById("pidgeonRoundOneChoiceScissors");
const pidgeonRoundOneChoiceLizard = document.getElementById("pidgeonRoundOneChoiceLizard");
const pidgeonRoundOneChoiceSpock = document.getElementById("pidgeonRoundOneChoiceSpock");


function hidePlayerImages() {
  playerRoundOneChoiceRock.classList.add('hidden');
  playerRoundOneChoicePaper.classList.add('hidden');
  playerRoundOneChoiceScissors.classList.add('hidden');
  playerRoundOneChoiceLizard.classList.add('hidden');
  playerRoundOneChoiceSpock.classList.add('hidden');

}

function hideVillainImages() {
  pidgeonRoundOneChoiceRock.classList.add('hidden');
  pidgeonRoundOneChoicePaper.classList.add('hidden');
  pidgeonRoundOneChoiceScissors.classList.add('hidden');
  pidgeonRoundOneChoiceLizard.classList.add('hidden');
  pidgeonRoundOneChoiceSpock.classList.add('hidden');

}

function showPidgeonImage(choice) {
  hideVillainImages();
  switch (choice) {
    case 1:
      pidgeonRoundOneChoiceRock.classList.remove('hidden');
      break;
    case 2:
      pidgeonRoundOneChoicePaper.classList.remove('hidden');
      break;
    case 3:
      pidgeonRoundOneChoiceScissors.classList.remove('hidden');
      break;
    case 4:
      pidgeonRoundOneChoiceLizard.classList.remove('hidden');
      break;
    case 5:
      pidgeonRoundOneChoiceSpock.classList.remove('hidden');
      break;
  }
}

document.getElementById("rockButton").addEventListener("click", function () {
  hidePlayerImages();
  playerRoundOneChoiceRock.classList.remove('hidden');
  gameEventHandler(1);
  const pidgeonChoice = villainChoice([5], []);
  showPidgeonImage(pidgeonChoice);  
});
document.getElementById("paperButton").addEventListener("click", function () {
  hidePlayerImages();
  playerRoundOneChoicePaper.classList.remove('hidden');
  gameEventHandler(2);
  const pidgeonChoice = villainChoice([5], []);
  showPidgeonImage(pidgeonChoice);
});
document.getElementById("scissorsButton").addEventListener("click", function () {
  hidePlayerImages();
  playerRoundOneChoiceScissors.classList.remove('hidden');
  gameEventHandler(3);
  const pidgeonChoice = villainChoice([5], []);
  showPidgeonImage(pidgeonChoice);
});
document.getElementById("lizardButton").addEventListener("click", function () {
  hidePlayerImages();
  playerRoundOneChoiceLizard.classList.remove('hidden');
  gameEventHandler(4);
  const pidgeonChoice = villainChoice([5], []);
  showPidgeonImage(pidgeonChoice);
});
document.getElementById("spockButton").addEventListener("click", function () {
  hidePlayerImages();
  playerRoundOneChoiceSpock.classList.remove('hidden');
  gameEventHandler(5);
  const pidgeonChoice = villainChoice([5], []);
  showPidgeonImage(pidgeonChoice);
});

document.getElementById("gameOver").addEventListener("click", function() {
  location.reload();
});

const roundTwo = document.getElementById("roundTwo");
  document.getElementById("nextRound").addEventListener("click", function() {
  document.getElementById("nextRound").classList.add("hidden");
  roundTwo.classList.remove('hidden');
});


function gameEventHandler(playerChoice, round) {
  let villainChoiceResult;
  if (round === 1) {
    villainChoiceResult = villainChoice([5], []);
  } else if (round === 2) {
    villainChoiceResult = villainChoice(Array.from({length: 5}, (_, i) => i + 1), []);
  }

  const result = whoWins(playerChoice, villainChoiceResult);
  const gameStatus = gameTracker(result);

  if (gameStatus === "Next Round!") {
    if (round === 1) {
      document.getElementById("roundOne").classList.add("hidden");
      document.getElementById("nextRound").classList.remove("hidden");
    } else if (round === 2) {
      document.getElementById("roundTwo").classList.add("hidden");
      // Add logic to move to round three here
    }
  } else if (gameStatus === "Game over") {
    document.getElementById("roundOne").classList.add("hidden");
    document.getElementById("gameOver").classList.remove("hidden");
  } else {
    document.getElementById("gameStatus").innerText = gameStatus;
  }
}

/*In order to feed every function with data, I created the first source of info. It will be player choice, given by pressing any of the numbers available*/
const playerRoundTwoChoiceRock = document.getElementById('playerRoundTwoChoiceRock')
const playerRoundTwoChoicePaper = document.getElementById('playerRoundTwoChoicePaper')
const playerRoundTwoChoiceScissors = document.getElementById('playerRoundTwoChoiceScissors')
const playerRoundTwoChoiceLizard = document.getElementById('playerRoundTwoChoiceLizard')
const playerRoundTwoChoiceSpock = document.getElementById('playerRoundTwoChoiceSpock')
const evilDieRoundTwoChoiceRock = document.getElementById("evilDieRoundTwoChoiceRock");
const evilDieRoundTwoChoicePaper = document.getElementById("evilDieRoundTwoChoicePaper");
const evilDieRoundTwoChoiceScissors = document.getElementById("evilDieRoundTwoChoiceScissors");
const evilDieRoundTwoChoiceLizard = document.getElementById("evilDieRoundTwoChoiceLizard");
const evilDieRoundTwoChoiceSpock = document.getElementById("evilDieRoundTwoChoiceSpock");


function hidePlayerRoundTwoImages() {
  playerRoundTwoChoiceRock.classList.add('hidden');
  playerRoundTwoChoicePaper.classList.add('hidden');
  playerRoundTwoChoiceScissors.classList.add('hidden');
  playerRoundTwoChoiceLizard.classList.add('hidden');
  playerRoundTwoChoiceSpock.classList.add('hidden');

}

function hideEvilDieImages() {
  evilDieRoundTwoChoiceRock.classList.add('hidden');
  evilDieRoundTwoChoicePaper.classList.add('hidden');
  evilDieRoundTwoChoiceScissors.classList.add('hidden');
  evilDieRoundTwoChoiceLizard.classList.add('hidden');
  evilDieRoundTwoChoiceSpock.classList.add('hidden');

}

function showEvilDieImage(choice) {
  hideEvilDieImages();
  switch (choice) {
    case 1:
      evilDieRoundTwoChoiceRock.classList.remove('hidden');
      break;
    case 2:
      evilDieRoundTwoChoicePaper.classList.remove('hidden');
      break;
    case 3:
      evilDieRoundTwoChoiceScissors.classList.remove('hidden');
      break;
    case 4:
      evilDieRoundTwoChoiceLizard.classList.remove('hidden');
      break;
    case 5:
      evilDieRoundTwoChoiceSpock.classList.remove('hidden');
      break;
  }
}

document.getElementById("roundTwoRockButton").addEventListener("click", function () {
  hidePlayerRoundTwoImages();
  playerRoundTwoChoiceRock.classList.remove('hidden');
  gameEventHandler(1, 2);
  const evilDiceChoice = villainChoice(Array.from({length: 5}, (_, i) => i + 1), []);
  showEvilDieImage(evilDiceChoice);
});
document.getElementById("roundTwoPaperButton").addEventListener("click", function () {
  hidePlayerRoundTwoImages();
  playerRoundTwoChoicePaper.classList.remove('hidden');
  gameEventHandler(1, 2);
  const evilDiceChoice = villainChoice(Array.from({length: 5}, (_, i) => i + 1), []);
  showEvilDieImage(evilDiceChoice);
});
document.getElementById("roundTwoScissorsButton").addEventListener("click", function () {
  hidePlayerRoundTwoImages();
  playerRoundTwoChoiceScissors.classList.remove('hidden');
  gameEventHandler(1, 2);
  const evilDiceChoice = villainChoice(Array.from({length: 5}, (_, i) => i + 1), []);
  showEvilDieImage(evilDiceChoice);
});
document.getElementById("roundTwoLizardButton").addEventListener("click", function () {
  hidePlayerRoundTwoImages();
  playerRoundTwoChoiceLizard.classList.remove('hidden');
  gameEventHandler(1, 2);
  const evilDiceChoice = villainChoice(Array.from({length: 5}, (_, i) => i + 1), []);
  showEvilDieImage(evilDiceChoice);
});
document.getElementById("roundTwoSpockButton").addEventListener("click", function () {
  hidePlayerRoundTwoImages();
  playerRoundTwoChoiceSpock.classList.remove('hidden');
  gameEventHandler(1, 2);
  const evilDiceChoice = villainChoice(Array.from({length: 5}, (_, i) => i + 1), []);
  showEvilDieImage(evilDiceChoice);
});

document.getElementById("gameOver").addEventListener("click", function() {
  location.reload();
});

function gameEventHandler(playerChoice) {
  const villainChoiceResult = villainChoice([5], []);
  const result = whoWins(playerChoice, villainChoiceResult);
  const gameStatus = gameTracker(result);

  if (gameStatus === "Next Round!") {
    document.getElementById("roundOne").classList.add("hidden");
    document.getElementById("nextRound").classList.remove("hidden");    
  } else if (gameStatus === "Game over") {
    document.getElementById("roundOne").classList.add("hidden");
    document.getElementById("gameOver").classList.remove("hidden");
  } else {
    document.getElementById("gameStatus").innerText = gameStatus;
  }
}