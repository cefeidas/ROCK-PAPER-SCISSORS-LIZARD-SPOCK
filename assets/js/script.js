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
    const combinedList = list1.concat(list2);
    const randomIndex = Math.floor(Math.random() * combinedList.length);
    return combinedList[randomIndex];
  }