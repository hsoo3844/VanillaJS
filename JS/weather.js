const API_KEY = 'ecfc9e7c960476e7229e717ab969ec94'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Location Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);