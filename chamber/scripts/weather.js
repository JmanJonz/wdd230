// Reference to page elements
const image = document.querySelector(".weatherImage");
const temper = document.querySelector("#temp");
const descript = document.querySelector(".weatherDescription");
const windSpeed = document.querySelector("#speed");

// Mccall Valley County weather url api
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=mccall&appid=ac915a6d1258935157073b6ba78cb9f4&units=imperial"

// Get data from the api.
async function GetWeatherInfo(){
    const allDataWithExtraResponseInfo = await fetch(weatherApiUrl);
    returnedJSObject = await allDataWithExtraResponseInfo.json();
    return returnedJSObject;
}

// Use the api data to dynamically change page elements content
async function UpdateWeatherContent(){
    const mccallWeatherData = await GetWeatherInfo();

    const imageAddress = `https://openweathermap.org/img/wn/${mccallWeatherData.weather[0].icon}@2x.png`;
    image.setAttribute("src", imageAddress);
    image.setAttribute("alt", "Weather Icon");

    descript.textContent = toTitleCase(mccallWeatherData.weather[0].description);

    temper.textContent = mccallWeatherData.main.temp.toFixed(0);

    windSpeed.textContent = mccallWeatherData.wind.speed.toFixed(0);
}
UpdateWeatherContent();
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    }).join(' ');
  }