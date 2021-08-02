import { apiCall } from "../utils";

import { BASE_URL } from "../config/urls";

export const fetchLocations = () => {
  return apiCall(`${BASE_URL}/locations`);
};

export const fetchBestMatchingDeals = ({ from, to, type }) => {
  const urlToUse = `${BASE_URL}/getBestMatchingDeals`;
  urlToUse.searchParams.append("from", from);
  urlToUse.searchParams.append("to", from);
  urlToUse.searchParams.append("type", type);
  return apiCall(urlToUse);
};
