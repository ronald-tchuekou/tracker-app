import React from "react"
import {StyleSheet} from "react-native";
import MapView, {Polyline} from "react-native-maps";
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from "expo-location";
import {Text} from "react-native-elements";

const TrackMap = () => {
   const [err, setErr] = React.useState(null)
   const [location, setLocation] = React.useState({
      coords: {
         latitude: 4.048870344450497,
         longitude: 9.736071610643041,
      }
   })

   const points = []
   for (let i = 0; i < 10; i++) {
      if (i % 2 || i % 3) {
         points.push({
            latitude: location.coords.latitude + (i * 0.0001),
            longitude: location.coords.longitude + (i * 0.001),
         })
      } else {
         points.push({
            latitude: location.coords.latitude + (i * 0.001),
            longitude: location.coords.longitude + (i * 0.0001),
         })
      }
   }

   React.useEffect(() => {
      startWatching()
   }, [])

   const startWatching = async () => {
      let {status} = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
         setErr('Permission to access location was denied');
         return;
      }

      await watchPositionAsync({
         accuracy: Accuracy.BestForNavigation,
         timeInterval: 1000,
         distanceInterval: 10
      }, (location) => {
         console.log(location)
      })

      // let location = await getCurrentPositionAsync({});
      // setLocation(location);
   }

   return (
      <>
         <MapView
            initialRegion={{
               latitude: location.coords.latitude,
               longitude: location.coords.longitude,
               latitudeDelta: 0.01,
               longitudeDelta: 0.01
            }}
            style={styles.map}
         >
            <Polyline
               strokeWidth={3}
               strokeColor={'#f32626'}
               coordinates={points}
            />
         </MapView>
         {err ? <Text h4 style={{margin: 10, color: '#f00'}}>{err}</Text> : null}
      </>
   )
}

const styles = StyleSheet.create({
   map: {
      height: 300
   }
})

export default TrackMap
