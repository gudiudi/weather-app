import "./styles.css";
import render from "./ui.js";
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

	render(mockWeatherData);
})();
