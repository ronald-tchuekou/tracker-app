import React from "react"
import {ActivityIndicator, StyleSheet} from "react-native";
import MapView, {Circle, Polyline} from "react-native-maps";
import {Context as LocationContext} from "../contexts/LocationContext";

const TrackMap = () => {
   const {state: {currentLocation, locations}} = React.useContext(LocationContext)

   if (!currentLocation) return <ActivityIndicator size={'large'} style={{marginTop: 200}}/>

   return (<>
      <MapView
         initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
         }}
         style={styles.map}
      >
         <Circle
            center={currentLocation.coords}
            radius={50}
            strokeColor={'rgba(158, 158, 255, 1.0)'}
            fillColor={'rgba(158, 158, 255, 0.3)'}
            strokeWidth={2}
         />
         <Polyline
            coordinates={locations.map(item => item.coords)}
         />
      </MapView>
   </>)
}

const styles = StyleSheet.create({
   map: {
      height: 300
   }
})

export default TrackMap
