const convertToFahrenheit = (temp) => {
	return temp * (9 / 5) + 32;
};

const convertToCelsius = (temp) => {
	return (temp - 32) * (5 / 9);
};

const convertToKilometers = (speed) => {
	return speed * 1.60934;
};

const convertToMiles = (speed) => {
	return speed / 1.60934;
};

const convertTemperature = (temp, measurement) => {
	const formulas = {
		c: convertToCelsius,
		f: convertToFahrenheit,
	};

	return formulas[measurement]
		? Math.round(formulas[measurement](temp) * 10) / 10
		: "Invalid measurement unit";
};

const convertSpeed = (speed, measurement) => {
	const formulas = {
		"km/h": convertToKilometers,
		mph: convertToMiles,
	};

	return formulas[measurement]
		? Math.round(formulas[measurement](speed) * 10) / 10
		: "Invalid measurement unit";
};

export { convertTemperature, convertSpeed };
