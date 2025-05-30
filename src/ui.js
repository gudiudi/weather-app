const render = (weatherData, unit = "metric") => {
	const temperatureUnit = unit === "metric" ? "°C" : "°F";
	const speedUnit = unit === "metric" ? "km/h" : "mph";

	const weatherDiv = document.querySelector(".weather");
	weatherDiv.innerHTML = `
  <div class="weather-header">
    <div class="weather-conditions">${weatherData.conditions}</div>
    <div class="weather-location">${weatherData.location}</div>
    
  </div>
  <div class="weather-content">
  <div class="weather-temperature">${weatherData.temperature}<span>${temperatureUnit}</span></div>
    <div class="weather-content-details">
      <div class="weather-feelslike">Feels Like: ${weatherData.feelsLike}<span>${temperatureUnit}</span></div>
      <div class="weather-windspeed">Wind: ${weatherData.windSpeed} <span>${speedUnit}</span></div>
      <div class="weather-humidity">Humidity: ${weatherData.humidity}%</div>
    </div>
  </div>
`;
};

const createLoaderElement = () => {
	const loader = document.createElement("div");
	loader.className = "loader";
	return loader;
};

const showLoader = () => {
	const loader = createLoaderElement();
	const weatherDiv = document.querySelector(".weather");
	weatherDiv.innerHTML = "";
	weatherDiv.appendChild(loader);
};

export { render, showLoader };
