const getWeatherData = async (location, unit) => {
	if (!location || location.trim() === "") {
		throw new Error("Location is missing!");
	}

	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=${unit}&include=current&key=7V89SJU8YEMTJ6L6V5ZUAES3E&contentType=json`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const weatherData = await response.json();
		return extractWeatherData(weatherData);
	} catch (e) {
		console.error(e.message);
	}
};

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

export default getWeatherData;
