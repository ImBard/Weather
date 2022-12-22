const BASE_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-23.2128512&longitude=-45.8129408&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,snowfall,snow_depth,freezinglevel_height,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&'

console.log(BASE_URL)
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

getLocation()

async function getWeather() {
  await fetch(BASE_URL + new URLSearchParams({
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }), {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
}




