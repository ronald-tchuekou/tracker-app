import React from "react"
import {View} from "react-native";
import {Button, Input} from "react-native-elements";
import {Context as LocationContext} from "../contexts/LocationContext";

const TrackForm = () => {
   const {
      state: {name, recording, locations},
      startRecording,
      stopRecording,
      changeName
   } = React.useContext(LocationContext)

   return (
      <View style={{padding: 20}}>
         <Input
            value={name}
            onChangeText={changeName}
            label={'Enter name'}
            placeholder={'Enter name'}
         />
         {
            recording ?
               <Button
                  onPress={() => stopRecording()}
                  title={'Stop'}
               /> :
               <Button
                  onPress={() => startRecording()}
                  title={'Start recording'}
               />
         }
         <View style={{margin: 10}}/>
         {
            locations.length > 0 ?
               <Button
                  onPress={() => {}}
                  title={'Save records'}
               /> : null
         }
      </View>
   )
}

export default TrackForm
