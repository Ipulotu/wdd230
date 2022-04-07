
const weather = document.querySelector('#weather');

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Edmonton&units=imperial&appid=f80f6517fab6ca9c947f4a302abe02f6";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let count = -1
    jsObject.list.forEach(i => {
      let dt = new Date(i.dt_txt)
      let dn = dt.getDay()
      if (count == 6){
        if (dn == 0){
          displayWeatherCard(i)
          count = 0
        }
      } else{
        if (dn > count){
          displayWeatherCard(i)
          count = dn
        }
      }
    });
  });



    function displayWeatherCard(day) {
      let iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;

      let div = document.createElement('div');
      let date = document.createElement('p');
      let img = document.createElement('img');
      let high = document.createElement('p');
      let low = document.createElement('p');
      let text = document.createElement('p');

      text.textContent = `${day.weather[0].description}`;


      let dt = new Date(day.dt_txt)
     
      switch (dt.getDay()) {
        case 0:
          date.textContent = "Sunday";
          break;
        case 1:
          date.textContent = "Monday";
          break;
        case 2:
          date.textContent = "Tuesday";
          break;
        case 3:
          date.textContent = "Wednesday";
          break;
        case 4:
          date.textContent = "Thursday";
          break;
        case 5:
          date.textContent = "Friday";
          break;
        case 6:
          date.textContent = "Saturday";
      }

      img.setAttribute('src', iconsrc)
      img.setAttribute('alt', `${day.weather[0].description}`)

      high.textContent = `High ${Math.round(day.main.temp_max)}°F`
      low.textContent = `Low ${Math.round(day.main.temp_min)}°F`

      div.appendChild(date);
      div.appendChild(img);
      div.appendChild(high);
      div.appendChild(low);
      div.appendChild(text);
  
      weather.appendChild(div);
    }

  


    