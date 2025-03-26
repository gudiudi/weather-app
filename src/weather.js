const getWeatherData = async (location) => {
	if (!location || location.trim() === "") {
		throw new Error("Location is missing!");
	}

	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=current&key=7V89SJU8YEMTJ6L6V5ZUAES3E&contentType=json`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		return json;
	} catch (e) {
		console.error(e.message);
	}
};

export default getWeatherData;
