import "./styles.css";
import getWeatherData from "./weather.js";

const extractWeatherData = (weatherData) => {
	const { resolvedAddress: location, currentConditions } = weatherData;
	const {
		conditions,
		temp: temperature,
		feelslike: feelsLike,
		winspeed: windSpeed,
		humidity,
	} = currentConditions;

	return { location, conditions, temperature, feelsLike, windSpeed, humidity };
};

(async () => {
	const weatherData = await getWeatherData("palembang");
	const extractedData = extractWeatherData(weatherData);
	console.log(extractedData);
})();
