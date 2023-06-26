function getWeather() {
    const apiKey = "4d8fb5b93d4af21d66a2948710284366";
    const cityInput = document.getElementById("cityInput");
    const inputVal = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            showWeather(data);
        })
       
}

function showWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} &deg;C</p>`;
}