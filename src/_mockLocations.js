import * as Location from "expo-location"

const tenMetersWithDegrees = 0.0001

const getLocation = increment => {
   return {
      timestamp: 1000000,
      coords: {
         speed: 0,
         heading: 0,
         accuracy: 0,
         altitudeAccuracy: 5,
         altitude: 5,
         latitude: 37.33233141 + increment * tenMetersWithDegrees,
         longitude: -122.0332243 + increment * tenMetersWithDegrees
      }
   }
}

let counter = 0;
setInterval(() => {
   Location.EventEmitter.emit('Expo.locationChange', {
      watchId: Location._getCurrentWatchId(),
      location: getLocation(counter)
   });
   counter++;
}, 1000)
