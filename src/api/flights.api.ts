import { SKYSCANNER_API_KEY } from "keys";

export const getFlightStatsRequest = () => {
  const url =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/EN-us/LAX/JFK/2020-01-01/2020-01-01";
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-key": `${SKYSCANNER_API_KEY}`
    }
  })
    .then(res => res.json())
    .then(res => res);
};
