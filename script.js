document.getElementById('start-button').addEventListener('click', function () {
    const userInput = document.getElementById('datetime-input').value;
    if (userInput) {
        const targetDate = new Date(userInput).getTime();
        startCountdown(targetDate);
    }
});

function startCountdown(targetDate) {
    const alertSound = document.getElementById('alert-sound');
    clearInterval(window.countdownInterval);

    window.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (timeLeft < 0) {
            clearInterval(window.countdownInterval);
            document.getElementById("countdown").innerHTML = "<h1>Time's Up!</h1>";
            alertSound.play();
        }
    }, 1000);
}
