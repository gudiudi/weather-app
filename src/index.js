import "./styles.css";
import { render, showLoader } from "./ui.js";
import { convertSpeed, convertTemperature } from "./utils.js";
import getWeatherData from "./weather.js";

(() => {
	let unit = "metric";
	let weatherData = {
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
		render(weatherData);
	}, 1000);

	console.log(convertTemperature(weatherData.temperature, "c"));
	console.log(convertSpeed(weatherData.windSpeed, "km/h"));

	const form = document.querySelector("form");
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		showLoader();

		const input = e.target.querySelector("input#search");
		weatherData = await getWeatherData(input.value.trim(), unit);

		render(weatherData);
	});

	const unitButtonGroup = document.querySelector(".convert-button-group");
	unitButtonGroup.addEventListener("click", (e) => {
		if (
			e.target.classList.contains("active") ||
			!e.target.classList.contains("convert-button")
		)
			return;

		if (e.target.previousElementSibling?.classList.contains("active")) {
			e.target.previousElementSibling.classList.remove("active");
		}

		if (e.target.nextElementSibling?.classList.contains("active")) {
			e.target.nextElementSibling.classList.remove("active");
		}

		e.target.classList.add("active");

		weatherData.temperature = convertTemperature(
			weatherData.temperature,
			e.target.dataset.unit,
		);
		weatherData.feelsLike = convertTemperature(
			weatherData.feelsLike,
			e.target.dataset.unit,
		);
		weatherData.windSpeed = convertSpeed(
			weatherData.windSpeed,
			e.target.dataset.unit,
		);
		unit = e.target.dataset.unit;
		render(weatherData, e.target.dataset.unit);
	});
})();

/*
TODO
Add button listener, when clicked edit the weatherData?
add global weatherData
const convertedData = {
        ...weatherData,
        temperature: convertTemperature(rawWeatherData.temperature, currentTempUnit.toLowerCase()),
        feelsLike: convertTemperature(rawWeatherData.feelsLike, currentTempUnit.toLowerCase()),
        windSpeed: convertSpeed(rawWeatherData.windSpeed, currentSpeedUnit),
    };
*/
