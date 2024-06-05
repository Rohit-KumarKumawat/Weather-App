const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=6b5246b947804529b60132207240904%20";
export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=no`);
  return await response.json();
};
export const getWeatherDataForLocation = async (Lat, Long) => {
  const response = await fetch(`${baseURL}&q=${Lat},${Long}&aqi=yes`);
  return await response.json();
};
