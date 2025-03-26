import "./styles.css";
import { render, showLoader } from "./ui.js";
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

(() => {
	const mockWeatherData = {
		location: "Jakarta, Indonesia",
		conditions: "Rain, Partially cloudy",
		temperature: 30,
		feelsLike: 37.3,
		windSpeed: 11.2,
		humidity: 79.2,
	};

	showLoader();

	// Fake api call, coz why not
	setTimeout(() => {
		render(mockWeatherData);
	}, 1500);

	const form = document.querySelector("form");
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		showLoader();

		const input = e.target.querySelector("input#search");

		const weatherData = await getWeatherData(input.value.trim());
		const extractedData = extractWeatherData(weatherData);
		render(extractedData);
	});
})();
