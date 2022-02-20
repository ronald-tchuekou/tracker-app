import '../_mockLocations';
import React from "react"
import {StyleSheet} from "react-native";
import TrackMap from "../components/TrackMap";
import TrackForm from "../components/TrackForm";
import {SafeAreaView} from "react-navigation";
import {Text} from "react-native-elements";

const TractCreateScreen = () => {

   return (
      <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
         <Text h3 style={{margin: 10}}>Create new track</Text>
         <TrackMap/>
         <TrackForm/>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      marginVertical: 30
   }
})

export default TractCreateScreen
