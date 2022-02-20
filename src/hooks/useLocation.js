import React from "react";
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from "expo-location";

export default (shouldTracked, callback) => {
   const [err, setErr] = React.useState(null)

   React.useEffect(() => {
      let subscribe
      const startWatching = async () => {
         let {status} = await requestForegroundPermissionsAsync();
         if (status !== 'granted') {
            setErr('Permission to access location was denied');
            return;
         }
         setErr(null)
         subscribe = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
         }, callback)
      }

      if (shouldTracked)
         startWatching()
      else {
         if (subscribe)
            subscribe.remove()
         subscribe = null
      }
      return () => {
         if (subscribe) {
            subscribe.remove()
         }
      }
   }, [shouldTracked, callback])

   return [err]
}
