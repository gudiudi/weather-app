import "./styles.css";
import getWeatherData from "./weather.js";

const extractWeatherData = (weatherData) => {
	const { resolvedAddress: location, currentConditions } = weatherData;
	const {
		conditions,
		temp: temperature,
		feelslike: feelsLike,
		windspeed: windSpeed,
		humidity,
	} = currentConditions;

	return { location, conditions, temperature, feelsLike, windSpeed, humidity };
};

(async () => {
	const mockWeatherData = {
		location: "Jakarta, Indonesia",
		conditions: "Rain, Partially cloudy",
		temperature: 30,
		feelsLike: 37.3,
		windSpeed: 11.2,
		humidity: 79.2,
	};

	//const weatherData = await getWeatherData("palembang");
	//const extractedData = extractWeatherData(weatherData);
	console.log(mockWeatherData);
	const weatherDiv = document.querySelector(".weather");
	weatherDiv.innerHTML = `
    <div class="weather-header">
      <div class="weather-conditions">${mockWeatherData.conditions}</div>
      <div class="weather-location">${mockWeatherData.location}</div>
      
    </div>
    <div class="weather-content">
    <div class="weather-temperature">${mockWeatherData.temperature}<span>°C</span></div>
      <div class="weather-content-details">
        <div class="weather-feelslike">Feels Like: ${mockWeatherData.feelsLike}<span>°C</span></div>
        <div class="weather-windspeed">Wind: ${mockWeatherData.windSpeed} <span>km/h</span></div>
        <div class="weather-humidity">Humidity: ${mockWeatherData.humidity}%</div>
      </div>
    </div>
  `;
})();
