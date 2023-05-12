export const getDistance = (coords, data, filter = 1.5) => {
  const { longitude: uLongitude, latitude: uLatitude } = coords;
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;

  if(filter === 'all'){
    return data.location
  }

  const gLocation = data.location.filter((d) => {
    const { longitude, latitude, ...rest } = d;
    var a =
      0.5 -
      c((latitude - uLatitude) * p) / 2 +
      (c(uLatitude * p) *
        c(latitude * p) *
        (1 - c((longitude - uLongitude) * p))) /
        2;

    const dis = 12742 * Math.asin(Math.sqrt(a));
    
    return dis < filter * 1.609344;
  });

  return gLocation;
};

