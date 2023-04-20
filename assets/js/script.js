document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const imageButtons = document.querySelectorAll('.hidden');

    startBtn.addEventListener('click', function () {
        imageButtons.forEach(function (button) {
            button.classList.remove('hidden');
        });
        startBtn.classList.add('hidden');
    });
});