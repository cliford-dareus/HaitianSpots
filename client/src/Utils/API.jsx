export const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://travel-log-api.now.sh";
const token = import.meta.env.VITE_APP_MAPBOX_TOKEN;

export const getAllLocations = async () => {
  const response = await fetch(`${API_URL}/api/v1/location/`);
  const data = await response.json();
  return data.location;
};

export const updateLocations = async (id, data) => {
  const response = await fetch(`${API_URL}/api/v1/location/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getLocation = async (word) => {
  const response = await fetch(
    `${API_URL}/api/v1/location/filter?title=${word}`
  );
  const data = await response.json();
  return data;
};



// getDirections()
export const loginUser = async (body) => {
  const response = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  return data;
};

export const registerUser = async (body) => {
  const response = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  return data;
};
