
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Edmonton&units=imperial&appid=f80f6517fab6ca9c947f4a302abe02f6";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const temp = jsObject.main.temp.toFixed(1);
    const wind = jsObject.wind.speed.toFixed(1);
    const WindChill = (35.74 + (0.6215 * temp) - 35.75*(Math.pow(wind, 0.16)) + 0.4275*temp*(Math.pow(wind, 0.16))).toFixed(1);

    document.querySelector('#temp').textContent = temp;
    document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
    document.querySelector('#weatherText').setAttribute('alt', desc);
    document.querySelector('#weatherText').textContent = desc;
    document.querySelector('#windSpeed').textContent = wind;
    if (temp <= 50 && wind >= 3.0){
      document.querySelector('#windchill').textContent = WindChill;
    };
    });

  

