export const getDirections = async (start, end) => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start.longitude},${start.latitude};${end.longitude},${end.latitude}?geometries=geojson&access_token=${token}`
    );
    const data = await response.json();
    return data;
  };