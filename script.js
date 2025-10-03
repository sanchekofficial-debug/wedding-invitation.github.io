// Таймер обратного отсчета
function updateCountdown() {
    const weddingDate = new Date('February 21, 2026 18:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "<div style='font-size: 2rem;'>Свадьба состоялась!</div>";
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();