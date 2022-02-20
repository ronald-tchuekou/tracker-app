import React from "react"
import {StyleSheet, Text, View} from "react-native";

const TrackDetailScreen = () => {

   return (
      <View style={styles.container}>
         <Text style={styles.title}>This is track detail screen</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
   title: {
      fontSize: 20,
      fontWeight: 'bold'
   }
})

export default TrackDetailScreen
