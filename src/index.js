import "./styles.css";
import { render, showLoader } from "./ui.js";
import { convertSpeed, convertTemperature } from "./utils.js";
import getWeatherData from "./weather.js";

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
	}, 500);

	console.log(convertTemperature(mockWeatherData.temperature, "c"));
	console.log(convertSpeed(mockWeatherData.windSpeed, "km/h"));

	const form = document.querySelector("form");
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		showLoader();

		const input = e.target.querySelector("input#search");
		const weatherData = await getWeatherData(input.value.trim());

		render(weatherData);
	});

	const unitButtonGroup = document.querySelector(".convert-button-group");
	unitButtonGroup.addEventListener("click", (e) => {
		//e.target.classList.add("active");
		if (e.target.previousElementSibling?.classList.contains("active")) {
			e.target.previousElementSibling.classList.remove("active");
		}

		if (e.target.nextElementSibling?.classList.contains("active")) {
			e.target.nextElementSibling.classList.remove("active");
		}

		e.target.classList.add("active");
		console.log(e.target.dataset.unit);
	});
})();
