import React from 'react';
import axios from 'axios';

function useGoogleAddress(address) {
  const KEY = process.env.GOOGLE_MAPS_API_KEY;
  const [map, setMap] = React.useState({});
  const API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${KEY}`;

  const getMap = async () => {
    const res = await axios(API_URL);
    setMap(
      res.data.results[0].geometry.location ||
        res.data.results[0].location
    );
  };

  React.useEffect(() => {
    getMap();
  }, []);
  console.log(map);
  return map;
}

export { useGoogleAddress };
