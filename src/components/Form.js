import React from "react"
import {Button, Input, Text} from "react-native-elements";
import {StyleSheet} from "react-native";
import {Context as AuthContext} from "../contexts/AuthContext";

const Form = ({onSubmit, title, loading}) => {
   const {state} = React.useContext(AuthContext)

   const [data, setData] = React.useState({
      email: '',
      password: ''
   })

   console.log(state)

   return (
      <>
         <Text style={styles.title} h3>{title}</Text>
         {state.errorMessage ? <Text style={{
            color: '#e00',
            fontSize: 20,
         }}>{state.errorMessage}</Text> : <></>}
         <Input
            style={styles.mt}
            label={'Enter your email'}
            value={data.email}
            autoCapitalize={'none'}
            onChangeText={(val) => setData(s => ({...s, email: val}))}
         />
         <Input
            style={styles.mt}
            label={'Enter your password'}
            value={data.password}
            autoCapitalize={'none'}
            secureTextEntry
            onChangeText={(val) => setData(s => ({...s, password: val}))}
         />
         <Button
            titleStyle={styles.btn_title}
            containerStyle={styles.button}
            title={'Submit'}
            loading={loading}
            onPress={() => onSubmit(data)}
         />
      </>
   )
}

const styles = StyleSheet.create({
   title: {
      marginVertical: 15
   },
   mt: {
      marginTop: 15
   },
   btn_title: {
      fontSize: 20,
      fontWeight: '600'
   },
   button: {
      margin: 15,
      paddingHorizontal: 10,
      width: 200
   }
})

export default Form
