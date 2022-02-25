
temperature  = document.getElementById('temp').textContent
wind  = document.getElementById('windSpeed').textContent


WindChill = 35.74 + (0.6215 * temperature) - 35.75*(Math.pow(wind, 0.16)) + 0.4275*temperature*(Math.pow(wind, 0.16));

if (temperature <= 50 && wind >= 3.0){
    document.getElementById('windchill').textContent=WindChill.toFixed(2);
};