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
document.getElementById("rock-button").addEventListener("click", () => gameEventHandler(1));
document.getElementById("paper-button").addEventListener("click", () => gameEventHandler(2));
document.getElementById("scissors-button").addEventListener("click", () => gameEventHandler(3));
document.getElementById("lizard-button").addEventListener("click", () => gameEventHandler(4));
document.getElementById("spock-button").addEventListener("click", () => gameEventHandler(5));

function gameEventHandler(playerChoice) {
  const villainChoiceResult = villainChoice([5], []);
  const result = whoWins(playerChoice, villainChoiceResult);
  const gameStatus = gameTracker(result);

  if (gameStatus === "Next Round!") {
    document.getElementById("next-round").classList.remove("hidden");
  } else if (gameStatus === "Game over") {
    document.getElementById("game-over").classList.remove("hidden");
  } else {
    document.getElementById("game-status").innerText = gameStatus;
  }
}