import * as Location from "expo-location"

(async () => {
   let {status} = await Location.requestForegroundPermissionsAsync();
   if (status !== 'granted') {
      return;
   }

   const location = await Location.getCurrentPositionAsync({})

   if(!location) return;

   const tenMetersWithDegrees = 0.0001

   const getLocation = increment => {
      return {
         ...location,
         coords: {
            ...location.coords,
            latitude: location.coords.latitude + increment * tenMetersWithDegrees,
            longitude: location.coords.longitude + increment * tenMetersWithDegrees
         }
      }
   }

   let counter = 0;
   setInterval(() => {
      Location.EventEmitter.emit('Expo.locationChanged', {
         watchId: Location._getCurrentWatchId(),
         location: getLocation(counter)
      });
      counter++;
   }, 1000)
})()


