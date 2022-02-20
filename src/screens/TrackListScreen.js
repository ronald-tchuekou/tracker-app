import React from "react"
import {Button, StyleSheet, Text, View} from "react-native";

const TrackListScreen = ({navigation}) => {

   return (
      <View style={styles.container}>
         <Text style={styles.title}>This is track list screen</Text>
         <Button
            title={'Go to detail'}
            onPress={() => navigation.navigate('TrackDetail')}
         />
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

export default TrackListScreen
