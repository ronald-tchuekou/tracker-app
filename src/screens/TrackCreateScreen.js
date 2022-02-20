import '../_mockLocations';
import React from "react"
import {StyleSheet} from "react-native";
import TrackMap from "../components/TrackMap";
import TrackForm from "../components/TrackForm";
import {SafeAreaView, withNavigationFocus} from "react-navigation";
import {Text} from "react-native-elements";
import {Context as LocationContext} from "../contexts/LocationContext";
import useLocation from "../hooks/useLocation";

const TractCreateScreen = ({isFocused}) => {
   const {state: {recording}, addLocation} = React.useContext(LocationContext)
   const callback = React.useCallback((location) => {
      addLocation(location, recording)
   }, [recording])
   const [err] = useLocation(isFocused || recording, callback)

   return (
      <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
         <Text h3 style={{margin: 10}}>Create new track</Text>
         <TrackMap/>
         {err ? <Text h4 style={{margin: 10, color: '#f00'}}>{err + ""}</Text> : null}
         <TrackForm/>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      marginVertical: 30
   }
})

export default withNavigationFocus(TractCreateScreen)
