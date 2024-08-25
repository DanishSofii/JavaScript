let latitude = "";
let longitude = "";

function reqLocation() {
    const lt = document.getElementById("lat");
    const ln = document.getElementById("lon");
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;

                lt.innerText = latitude;
                ln.innerText = longitude;

                fetchWeather();
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        lt.innerHTML = "User denied the request for Geolocation.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        lt.innerHTML = "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        lt.innerHTML = "The request to get user location timed out.";
                        break;
                    case error.UNKNOWN_ERROR:
                        lt.innerHTML = "An unknown error occurred.";
                        break;
                }
            }
        );    
    } else {
        lt.innerHTML = "Geolocation is not supported by this browser.";
    }
}
// weather api used : weatherbit.io
// const API_KEY = "Your API KEY HERE ";

async function fetchWeather() {
    const api = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${API_KEY}&include=minutely`;
    
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data.data[0]);
    } catch (err) {
        console.error('Error fetching weather data:', err);
    }
}

function displayWeather(weatherData) {
    document.getElementById("cityName").innerText = weatherData.city_name;
    document.getElementById("temp").innerText = weatherData.temp;
    document.getElementById("app_temp").innerText = weatherData.app_temp;
    document.getElementById("description").innerText = weatherData.weather.description;
    document.getElementById("humidity").innerText = weatherData.rh;
    document.getElementById("wind_speed").innerText = weatherData.wind_spd;
    document.getElementById("wind_dir").innerText = weatherData.wind_cdir_full;
    document.getElementById("clouds").innerText = weatherData.clouds;
    document.getElementById("sunrise").innerText = weatherData.sunrise;
    document.getElementById("sunset").innerText = weatherData.sunset;
    document.getElementById("aqi").innerText = weatherData.aqi;
}

window.onload = reqLocation;
