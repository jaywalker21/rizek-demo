import { apiCall } from "../utils";

import { BASE_URL } from "../config/urls";

export const fetchLocations = () => {
  return apiCall(`${BASE_URL}/locations`);
};

export const fetchBestMatchingDeals = ({ queryKey }) => {
  const [_key, { from, to, type }] = queryKey;

  const urlToUse = new URL(`${BASE_URL}/getBestMatchingDeals`);
  urlToUse.searchParams.append("from", from);
  urlToUse.searchParams.append("to", to);
  urlToUse.searchParams.append("type", type);
  console.log({ urlToUse });
  return apiCall(urlToUse);
};
