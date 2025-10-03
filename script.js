// Таймер обратного отсчета
function updateCountdown() {
    const weddingDate = new Date('February 21, 2026 16:00:00').getTime();
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
        document.getElementById('countdown').innerHTML = "<div style='font-size: 1.5rem; padding: 20px;'>Свадьба состоялась!</div>";
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// КООРДИНАТЫ КАФЕ - ИЗМЕНИТЕ НА ВАШИ!
const cafeCoordinates = {
    lat: 51.698839,   // 🎯 ШИРОТА - замените на координаты вашего кафе
    lng: 39.149371,   // 🎯 ДОЛГОТА - замените на координаты вашего кафе
    name: "Tet-a-Tet",  // 🎯 Название вашего кафе
    address: "г. Воронеж, ул. Новгородская, д. 123а"  // 🎯 Адрес вашего кафе
};

// Инициализация карты
function initMap() {
    const map = new ymaps.Map('map', {
        center: [cafeCoordinates.lat, cafeCoordinates.lng],
        zoom: 16
    });

    // Добавляем метку
    const placemark = new ymaps.Placemark([cafeCoordinates.lat, cafeCoordinates.lng], {
        balloonContent: `
            <strong>${cafeCoordinates.name}</strong><br>
            ${cafeCoordinates.address}<br>
            <em>Ждём вас на нашей свадьбе!</em>
        `
    }, {
        preset: 'islands#redDotIcon',
        iconColor: '#8b4513'
    });

    map.geoObjects.add(placemark);
    
    // Убираем лишние элементы управления
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
    
    // Обновляем информацию о кафе
    document.getElementById('cafe-name').textContent = cafeCoordinates.name;
    document.getElementById('cafe-address').textContent = cafeCoordinates.address;
}

// Загружаем карты
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(initMap);
    }
});

