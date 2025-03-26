const render = (weatherData) => {
	const weatherDiv = document.querySelector(".weather");
	weatherDiv.innerHTML = `
  <div class="weather-header">
    <div class="weather-conditions">${weatherData.conditions}</div>
    <div class="weather-location">${weatherData.location}</div>
    
  </div>
  <div class="weather-content">
  <div class="weather-temperature">${weatherData.temperature}<span>°C</span></div>
    <div class="weather-content-details">
      <div class="weather-feelslike">Feels Like: ${weatherData.feelsLike}<span>°C</span></div>
      <div class="weather-windspeed">Wind: ${weatherData.windSpeed} <span>km/h</span></div>
      <div class="weather-humidity">Humidity: ${weatherData.humidity}%</div>
    </div>
  </div>
`;
};

export default render;
