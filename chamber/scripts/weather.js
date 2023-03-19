// Reference to page elements
const image = document.querySelector(".weatherImage");
const temper = document.querySelector("#temp");
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
    console.log(mccallWeatherData);

    const imageAddress = `https://openweathermap.org/img/wn/${mccallWeatherData.weather[0].icon}@2x.png`;
    image.setAttribute("src", imageAddress);

    temper.textContent = mccallWeatherData.main.temp.toFixed(0);

    windSpeed.textContent = mccallWeatherData.wind.speed.toFixed(0);
}
UpdateWeatherContent();