let input_value = document.querySelector('#input_value');
let button = document.querySelector('button');
let temp = document.querySelector('#temp');
let desc = document.querySelector('#desc');

button.addEventListener('click', function () {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input_value.value}&units=metric&{API_KEY}`
    )
        .then((response) => response.json())
        .then(display_data)
        .catch((err) => alert(`Wrong City Name`));
});

const display_data = (weather) => {
    temp.innerText = `${weather.main.temp}°C`;
    desc.innerText = `${weather.weather[0].main}`;
};
