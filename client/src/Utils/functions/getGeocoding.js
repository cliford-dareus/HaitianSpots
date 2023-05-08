const URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

export const getGeocoding = async (address) => {
  const response = await fetch(
    `${URL}/${address}.json?access_token=${
      import.meta.env.VITE_APP_MAPBOX_TOKEN
    }`
  );
  const data = await response.json();
  return data;
};
