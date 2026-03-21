import apiService from "../api/apiService";

const API_KEY = "109201f7c2a355f8340d51a1e6046ff8";
const BASE_URL = "https://api.openweathermap.org//data/2.5";
const GEO_URL = "https://api.openweathermap.org//geo/1.0";

export const getCurrentWeather = async (city) => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await apiService(url);
  const data = response.data;

  // if there is no timestamp in data, add current timestamp
  if (!data.dt) {
    data.dt = Math.floor(Date.now() / 1000);
  }

  return data;
};

export const getCurrentWeatherByCoords = async (lat, lon) => {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await apiService(url);
  const data = response.data;

  // if there is no timestamp in data, add current timestamp
  if (!data.dt) {
    data.dt = Math.floor(Date.now() / 1000);
  }

  return data;
};

export const getWeatherForecast = async (city) => {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await apiService(url);
  const data = response.data;

  return data;
};

export const searchCities = async (query) => {
  const url = `${GEO_URL}/direct?q=${query}&limit=5&appid=${API_KEY}`;
  const response = await apiService(url);

  // transform geocoded api response to match expected format
  const data = response.data.map((city) => ({
    name: city.name,
    lat: city.lat,
    lon: city.lon,
    country: city.country,
    state: city.state || "",
  }));

  return data;
};
