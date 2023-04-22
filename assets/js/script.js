document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const instructions = document.getElementById('Instructions');
    const roundOne = document.getElementById('roundOne');

    startBtn.addEventListener('click', function () {
        roundOne.classList.remove('hidden');
        instructions.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const playerOptions = document.querySelectorAll('.player-options .custom-button');
    const playerChoiceImages = document.querySelectorAll('.player-options img[id^="playerRoundOneChoice"]');
    const villainChoiceImage = document.getElementById('villainRoundOneChoiceSpock');
    const singleImageDiv = document.querySelector('.singleImage');
    
    startBtn.addEventListener('click', function() {
        for (const button of playerOptions) {
            button.addEventListener('click', function(event) {
                // Mostrar el contenedor singleImage
                singleImageDiv.classList.remove('hidden');

                // Ocultar todas las imágenes de elección de jugador
                for (const img of playerChoiceImages) {
                    img.classList.add('hidden');
                }
                
                // Mostrar la imagen correspondiente a la elección del jugador
                const choiceImg = event.currentTarget.querySelector('img');
                const choice = choiceImg.alt;
                const playerChoiceImage = document.getElementById(`playerRoundOneChoice${choice}`);
                playerChoiceImage.classList.remove('hidden');
                
                // Mostrar la imagen de elección del oponente (Spock)
                villainChoiceImage.classList.remove('hidden');
            });
        }
    });
});